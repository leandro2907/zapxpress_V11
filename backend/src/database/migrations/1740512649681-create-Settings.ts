
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Settings", {
  "key": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "value": {
    "type": "DataTypes.TEXT",
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
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Settings");
  }
};
