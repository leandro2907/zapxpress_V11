
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Tickets", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "status": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "lastMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "contactId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "userId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "createdAt": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "updatedAt": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "isGroup": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "unreadMessages": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "queueId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "uuid": {
    "type": "DataTypes.UUID",
    "allowNull": true
  },
  "chatbot": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "queueOptionId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "amountUsedBotQueues": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "fromMe": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "useIntegration": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "integrationId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "typebotSessionId": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "typebotStatus": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "promptId": {
    "type": "DataTypes.STRING",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Tickets");
  }
};
