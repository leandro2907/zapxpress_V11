
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Messages", {
  "id": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "body": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "ack": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "read": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "mediaType": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "mediaUrl": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "ticketId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "createdAt": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "updatedAt": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "fromMe": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "isDeleted": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "contactId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "quotedMsgId": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "remoteJid": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "dataJson": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "participant": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "queueId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "isEdited": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "reactions": {
    "type": "DataTypes.JSON",
    "allowNull": true
  },
  "isForwarded": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Messages");
  }
};
