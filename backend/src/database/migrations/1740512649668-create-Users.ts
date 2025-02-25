
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Users", {
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
  "email": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "passwordHash": {
    "type": "DataTypes.STRING",
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
  "profile": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "tokenVersion": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "super": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "online": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "allTicket": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "resetPassword": {
    "type": "DataTypes.STRING",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Users");
  }
};
