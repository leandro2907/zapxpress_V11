
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("QuickMessages", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "shortcode": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "message": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "companyId": {
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
  "userId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "mediaPath": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "mediaName": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "geral": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("QuickMessages");
  }
};
