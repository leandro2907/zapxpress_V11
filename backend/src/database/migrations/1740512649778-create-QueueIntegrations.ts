
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("QueueIntegrations", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "type": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "name": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "projectName": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "jsonContent": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "language": {
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
  "urlN8N": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "typebotSlug": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "typebotKeywordFinish": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "typebotExpires": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "typebotUnknownMessage": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "typebotDelayMessage": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "typebotKeywordRestart": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "typebotRestartMessage": {
    "type": "DataTypes.STRING",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("QueueIntegrations");
  }
};
