
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Plans", {
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
  "users": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "connections": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "queues": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "value": {
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
  },
  "useCampaigns": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useExternalApi": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useInternalChat": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useSchedules": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useInternal": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useKanban": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useOpenAi": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "useIntegrations": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Plans");
  }
};
