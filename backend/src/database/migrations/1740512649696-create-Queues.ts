
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Queues", {
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
  "color": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "greetingMessage": {
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
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "schedules": {
    "type": "DataTypes.JSONB",
    "allowNull": true
  },
  "outOfHoursMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "orderQueue": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "mediaName": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "mediaPath": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "integrationId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "promptId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Queues");
  }
};
