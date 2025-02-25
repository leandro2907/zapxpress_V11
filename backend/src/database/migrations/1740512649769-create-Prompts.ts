
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Prompts", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "name": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "apiKey": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "prompt": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "maxTokens": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "maxMessages": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "temperature": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "promptTokens": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "completionTokens": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "totalTokens": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "voice": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "voiceKey": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "voiceRegion": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "queueId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
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
    return queryInterface.dropTable("Prompts");
  }
};
