
import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Whatsapps", {
  "id": {
    "type": "DataTypes.INTEGER",
    "allowNull": false,
    "autoIncrement": true,
    "primaryKey": true
  },
  "session": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "qrcode": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "status": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "battery": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "plugged": {
    "type": "DataTypes.BOOLEAN",
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
  "name": {
    "type": "DataTypes.STRING",
    "allowNull": false
  },
  "isDefault": {
    "type": "DataTypes.BOOLEAN",
    "allowNull": false
  },
  "retries": {
    "type": "DataTypes.INTEGER",
    "allowNull": false
  },
  "greetingMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "companyId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "complationMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "outOfHoursMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "ratingMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "token": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "farewellMessage": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "provider": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  },
  "number": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "sendIdQueue": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "promptId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "integrationId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "maxUseBotQueues": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "expiresInactiveMessage": {
    "type": "DataTypes.STRING",
    "allowNull": true
  },
  "expiresTicket": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "timeUseBotQueues": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "transferQueueId": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "timeToTransfer": {
    "type": "DataTypes.INTEGER",
    "allowNull": true
  },
  "type": {
    "type": "DataTypes.TEXT",
    "allowNull": true
  }
});
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Whatsapps");
  }
};
