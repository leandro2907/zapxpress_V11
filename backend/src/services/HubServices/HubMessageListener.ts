import User from "../../models/User";
import Whatsapp from "../../models/Whatsapp";
import { downloadFiles } from "../../helpers/downloadHubFiles";
import CreateMessageService from "./CreateHubMessageService";
/*import CreateOrUpdateTicketService from "./CreateOrUpdateHubTicketService";*/
import FindOrCreateContactService from "./FindOrCreateHubContactService";
import { UpdateMessageAck } from "./UpdateMessageHubAck";
import FindOrCreateTicketService from "../TicketServices/FindOrCreateTicketService";

export interface HubInMessage {
  type: "MESSAGE";
  id: string;
  timestamp: string;
  subscriptionId: string;
  channel: "telegram" | "whatsapp" | "facebook" | "instagram" | "sms" | "email";
  direction: "IN";
  message: {
    id: string;
    from: string;
    to: string;
    direction: "IN";
    channel:
      | "telegram"
      | "whatsapp"
      | "facebook"
      | "instagram"
      | "sms"
      | "email";
    visitor: {
      name: string;
      firstName: string;
      lastName: string;
      picture: string;
    };
    contents: IContent[];
    timestamp: string;
  };
}

export interface IContent {
  type: "text" | "image" | "audio" | "video" | "file" | "location";
  text?: string;
  url?: string;
  fileUrl?: string;
  latitude?: number;
  longitude?: number;
  filename?: string;
  fileSize?: number;
  fileMimeType?: string;
}

export interface HubConfirmationSentMessage {
  type: "MESSAGE_STATUS";
  timestamp: string;
  subscriptionId: string;
  channel: "telegram" | "whatsapp" | "facebook" | "instagram" | "sms" | "email";
  messageId: string;
  contentIndex: number;
  messageStatus: {
    timestamp: string;
    code: "SENT" | "REJECTED";
    description: string;
  };
}

const verifySentMessageStatus = (message: HubConfirmationSentMessage) => {
  const {
    messageStatus: { code }
  } = message;

  const isMessageSent = code === "SENT";

  if (isMessageSent) {
    return true;
  }

  return false;
};

const HubMessageListener = async (
  message: any | HubInMessage | HubConfirmationSentMessage,
  whatsapp: Whatsapp,
  medias: Express.Multer.File[]
) => {
  console.log("HubMessageListener", message);
  console.log("contents", message.message.contents);

  // Se a mensagem for enviada de fora do sistema (OUT), ignoramos
  const ignoreEvent = message.direction === "OUT";
  if (ignoreEvent) {
    return;
  }

  const isMessageFromMe = message.type === "MESSAGE_STATUS";

  if (isMessageFromMe) {
    const isMessageSent = verifySentMessageStatus(
      message as HubConfirmationSentMessage
    );

    if (isMessageSent) {
      console.log("HubMessageListener: message sent");
      UpdateMessageAck(message.messageId);
    } else {
      console.log(
        "HubMessageListener: message not sent",
        message.messageStatus.code,
        message.messageStatus.description
      );
    }

    return;
  }

  // Desestruturando os dados da mensagem recebida
  const {
    message: { id, from, channel, contents, visitor }
  } = message as HubInMessage;

  try {

    const unreadMessages = 1;
    
    // Passando whatsapp.companyId diretamente para FindOrCreateContactService
    const contact = await FindOrCreateContactService({
      ...visitor,
      from,
      whatsapp,
      channel,
      companyId: whatsapp.companyId // Passando diretamente
    });

    // Passando o companyId para a função de criação ou atualização do ticket
    const ticket = await FindOrCreateTicketService(
      contact,
      whatsapp.id!,
      unreadMessages,
      contact.companyId || whatsapp.companyId // Passando o companyId aqui, já atribuído corretamente do contato ou whatsapp
    );

    // Obtendo o companyId corretamente
    let companyId = contact.companyId || whatsapp.companyId || ticket.companyId;

    // Se o companyId ainda for indefinido, lança erro
    if (!companyId) {
      throw new Error("Erro: companyId não encontrado no contato, WhatsApp nem no Ticket.");
      console.log("Erro: companyId não encontrado no contato, WhatsApp nem no Ticket.");
    }
    
    
    

    // Se o conteúdo da mensagem for de texto
    if (contents[0]?.type === "text") {
      await CreateMessageService({
        id,
        contactId: contact.id,
        body: contents[0].text || "",
        ticketId: ticket.id,
        fromMe: false,
        companyId: contact.companyId || whatsapp.companyId || ticket.companyId
      });
    } else if (contents[0]?.fileUrl) {
      // Se a mensagem tiver um arquivo, baixamos o arquivo
      const media = await downloadFiles(contents[0].fileUrl, companyId); // Passando o companyId

      // Verificando o tipo MIME do arquivo
      if (typeof media.mimeType === "string") {
        await CreateMessageService({
          id,
          contactId: contact.id,
          body: contents[0].text || "",
          ticketId: ticket.id,
          fromMe: false,
          companyId: contact.companyId || whatsapp.companyId || ticket.companyId,
          fileName: `${media.filename}`,
          mediaType: media.mimeType.split("/")[0], // Para diferenciar o tipo (imagem, vídeo, etc.)
          originalName: media.originalname // Nome original do arquivo
        });
      }
    }
  } catch (error: any) {
    console.log(error);
  }
};

export default HubMessageListener;
