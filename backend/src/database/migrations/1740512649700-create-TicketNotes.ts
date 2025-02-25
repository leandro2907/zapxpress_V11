
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("TicketNotes", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "note": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "userId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "contactId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "ticketId": {
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
    return queryInterface.dropTable("TicketNotes");
  }
};
