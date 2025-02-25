
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Baileys", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "contacts": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "chats": {
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
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Baileys");
  }
};
