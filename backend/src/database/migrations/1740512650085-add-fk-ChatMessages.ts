
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("ChatMessages", {
      fields: ["chatId"],
      type: "foreign key",
      name: "fk_ChatMessages_chatId",
      references: {
        table: "Chats",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("ChatMessages", {
      fields: ["senderId"],
      type: "foreign key",
      name: "fk_ChatMessages_senderId",
      references: {
        table: "Users",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("ChatMessages", "fk_ChatMessages_chatId");
    await queryInterface.removeConstraint("ChatMessages", "fk_ChatMessages_senderId");
  }
};
