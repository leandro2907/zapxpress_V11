
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("HubNotificaMe", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "userId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "nome": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "token": {
    "type": "DataTypes.TEXT",
    "allowNull": false
  },
  "tipo": {
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
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("HubNotificaMe");
  }
};
