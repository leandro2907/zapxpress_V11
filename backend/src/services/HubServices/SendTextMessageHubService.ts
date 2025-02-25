require("dotenv").config();
const { Client, TextContent } = require("notificamehubsdk");
import Contact from "../../models/Contact";
import Ticket from "../../models/Ticket";
import CreateMessageService from "./CreateHubMessageService";
import { showHubToken } from "../../helpers/showHubToken";

export const SendTextMessageService = async (
  message: string,
  ticketId: number,
  contact: Contact,
  connection: any,
  companyIdOld: number //Apenas para completar a quantidade de argumentos
) => {

  // Buscar o ticket para obter o companyId
  const ticket = await Ticket.findOne({ where: { id: ticketId } });

  if (!ticket) {
    throw new Error("Ticket não encontrado");
  }

  const companyId = ticket.companyId; // Agora temos o companyId
  
  const notificameHubToken = await showHubToken();

  const client = new Client(notificameHubToken);

  let channelClient;

  message = message.replace(/\n/g, " ");

  const content = new TextContent(message);

  let contactNumber;

  if(contact.messengerId && !contact.instagramId){
    contactNumber = contact.messengerId
    channelClient = client.setChannel('facebook');
  }
  if(!contact.messengerId && contact.instagramId){
    contactNumber = contact.instagramId
    channelClient = client.setChannel('instagram');
  }

  try {

    /*// Busca o companyId a partir do ticketId
    const ticket = await Ticket.findOne({ where: { id: ticketId } });
    if (!ticket) {
      throw new Error("Ticket não encontrado");
    }

    const companyId = ticket.companyId; // Obtém o companyId da tabela Ticket
*/
    console.log({
      token: connection.qrcode,
      number: contactNumber,
      content,
      message,
      companyId
    });

    let response = await channelClient.sendMessage(
      connection.qrcode,
      contactNumber,
      content
    );

    console.log("response:", response);

    let data: any;

    try {
      const jsonStart = response.indexOf("{");
      const jsonResponse = response.substring(jsonStart);
      data = JSON.parse(jsonResponse);
    } catch (error) {
      data = response;
    }

    const newMessage = await CreateMessageService({
      id: data.id,
      contactId: contact.id,
      //companyId: contact.companyId,
      companyId, // Passando o companyId recuperado do ticket
      body: message,
      ticketId,
      fromMe: true
    });

    return newMessage;
  } catch (error) {
    console.log("Error:", error);
  }
};