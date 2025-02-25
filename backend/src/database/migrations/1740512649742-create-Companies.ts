
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Companies", {
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
  "phone": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "email": {
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
  "planId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "status": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "schedules": {
    "type": "DataTypes.JSONB",
    "allowNull": true
  },
  "dueDate": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "recurrence": {
    "type": "DataTypes.STRING",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Companies");
  }
};
