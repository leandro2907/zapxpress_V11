
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Subscriptions", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "isActive": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": true
  },
  "expiresAt": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "userPriceCents": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "whatsPriceCents": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "lastInvoiceUrl": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "lastPlanChange": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "providerSubscriptionId": {
    "type": "DataTypes.STRING",
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
    return queryInterface.dropTable("Subscriptions");
  }
};
