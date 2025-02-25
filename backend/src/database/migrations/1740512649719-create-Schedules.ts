
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Schedules", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "body": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "sendAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "sentAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "contactId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "ticketId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "userId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "companyId": {
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
  "status": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "mediaName": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "mediaPath": {
    "type": "DataTypes.STRING",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Schedules");
  }
};
