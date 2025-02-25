
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Announcements", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "priority": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "title": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "text": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "mediaPath": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "mediaName": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "status": {
    "type": "DataTypes.BOOLEAN",
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
    return queryInterface.dropTable("Announcements");
  }
};
