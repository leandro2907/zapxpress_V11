
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Invoices", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "detail": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "status": {
    "type": "DataTypes.STRING",
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
  "dueDate": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Invoices");
  }
};
