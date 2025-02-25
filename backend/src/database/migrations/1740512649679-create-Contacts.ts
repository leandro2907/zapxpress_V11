
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Contacts", {
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
  "number": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "profilePicUrl": {
    "type": "DataTypes.TEXT",
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
  "email": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "isGroup": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "active": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "disableBot": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "messengerId": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "instagramId": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Contacts");
  }
};
