require("dotenv").config();
const { Client, FileContent } = require("notificamehubsdk");
import Contact from "../../models/Contact";
import Ticket from "../../models/Ticket";
import CreateMessageService from "./CreateHubMessageService";
import { showHubToken } from "../../helpers/showHubToken";
import { convertMp3ToMp4 } from "../../helpers/ConvertMp3ToMp4";

export const SendMediaMessageService = async (
  media: Express.Multer.File,
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

  let channelClient
  let contactNumber
  let type
  let mediaUrl

  if(contact.messengerId && !contact.instagramId){
    contactNumber = contact.messengerId
    type = 'facebook'
    channelClient = client.setChannel(type);
  }
  if(!contact.messengerId && contact.instagramId){
    contactNumber = contact.instagramId
    type = 'instagram'
    channelClient = client.setChannel(type);
  }

  message = message.replace(/\n/g, " ");

  
/* USAR EM TESTE */
  //const backendUrl = 'https://0513-201-75-90-49.ngrok-free.app';

  /* USAR EM PRODUÇÃO */
  const backendUrl = `${process.env.BACKEND_URL}`;


  const filename = encodeURIComponent(media.filename);
  mediaUrl = `${backendUrl}/public/company${companyId}/${filename}`;

  if (media.mimetype.includes("image")) {
    if (type === "telegram") {
      media.mimetype = "photo";
    } else {
      media.mimetype = "image";
    }
  } else if (
    (type === "telegram" || type === "facebook") &&
    media.mimetype.includes("audio")
  ) {
    media.mimetype = "audio";
  } else if (
    (type === "telegram" || type === "facebook") &&
    media.mimetype.includes("video")
  ) {
    media.mimetype = "video";
  } else if (type === "telegram" || type === "facebook") {
    media.mimetype = "file";
  }

  try {

    if (media.originalname.includes('.mp3') && type === 'instagram') {
      const inputPath = media.path;
      const outputMP4Path = `${media.destination}/${media.filename.split('.')[0]}.mp4`;
      try {
        await convertMp3ToMp4(inputPath, outputMP4Path);
        media.filename = outputMP4Path.split('/').pop() ?? 'default.mp4';
        mediaUrl = `${backendUrl}/public/company${companyId}/${media.filename}`;
        media.originalname = media.filename
        media.mimetype = 'audio'
      } catch(e){

      }
    }

    if (media.originalname.includes('.mp3') && type === 'facebook') {
      mediaUrl = `${backendUrl}/public/company${companyId}/${media.filename}`;
      media.originalname = media.filename
      media.mimetype = 'audio'
    }

    const content = new FileContent(
      mediaUrl,
      media.mimetype,
      media.originalname,
      media.originalname
    );

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
      companyId, // Passando o companyId recuperado do ticket
      body: message,
      ticketId,
      fromMe: true,
      fileName: `${media.filename}`,
      mediaType: media.mimetype.split("/")[0],
      originalName: media.originalname
    });

    return newMessage;
  } catch (error) {
    console.log("Error:", error);
  }
};