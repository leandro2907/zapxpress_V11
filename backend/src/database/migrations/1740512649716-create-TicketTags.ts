
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("TicketTags", {
  "ticketId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "tagId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
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
    return queryInterface.dropTable("TicketTags");
  }
};
