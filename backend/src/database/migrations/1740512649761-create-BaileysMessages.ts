
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("BaileysMessages", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "whatsappId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "baileysChatId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "jsonMessage": {
    "type": "DataTypes.JSON",
    "allowNull": false
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
    return queryInterface.dropTable("BaileysMessages");
  }
};
