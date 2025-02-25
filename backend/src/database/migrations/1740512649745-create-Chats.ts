
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Chats", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "title": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "uuid": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "ownerId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "lastMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "companyId": {
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
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Chats");
  }
};
