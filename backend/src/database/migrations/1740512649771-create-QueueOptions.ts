
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("QueueOptions", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "title": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "message": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "option": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "queueId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "parentId": {
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
  "mediaName": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "mediaPath": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("QueueOptions");
  }
};
