
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("TicketTraking", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "ticketId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "userId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "createdAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "updatedAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "queuedAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "startedAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "finishedAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "ratingAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "rated": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "chatbotAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("TicketTraking");
  }
};
