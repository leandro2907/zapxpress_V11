
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Campaigns", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "name": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "message1": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "message2": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "message3": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "message4": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "message5": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "confirmationMessage1": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "confirmationMessage2": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "confirmationMessage3": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "confirmationMessage4": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "confirmationMessage5": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "status": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "confirmation": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "mediaPath": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "mediaName": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "contactListId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "scheduledAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "completedAt": {
    "type": "DataTypes.STRING",
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
  "fileListId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Campaigns");
  }
};
