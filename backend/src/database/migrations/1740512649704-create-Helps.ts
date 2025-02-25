
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Helps", {
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
  "description": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "video": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "link": {
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
    return queryInterface.dropTable("Helps");
  }
};
