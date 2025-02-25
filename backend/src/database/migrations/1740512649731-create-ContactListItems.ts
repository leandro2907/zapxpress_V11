
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("ContactListItems", {
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
  "number": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "email": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "contactListId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "isWhatsappValid": {
    "type": "DataTypes.BOOLEAN",
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
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("ContactListItems");
  }
};
