
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("ChatMessages", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "chatId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "senderId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "message": {
    "type": "DataTypes.TEXT",
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
    return queryInterface.dropTable("ChatMessages");
  }
};
