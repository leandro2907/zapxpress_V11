
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("CampaignShipping", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "jobId": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "number": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "message": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "confirmationMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "confirmation": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "contactId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "campaignId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "confirmationRequestedAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "confirmedAt": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "deliveredAt": {
    "type": "DataTypes.STRING",
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
    return queryInterface.dropTable("CampaignShipping");
  }
};
