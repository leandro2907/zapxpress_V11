
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("SequelizeMeta", {
  "name": {
    "type": "DataTypes.STRING",
    "allowNull": false
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("SequelizeMeta");
  }
};
