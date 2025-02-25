
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("ChatUsers", {
      fields: ["chatId"],
      type: "foreign key",
      name: "fk_ChatUsers_chatId",
      references: {
        table: "Chats",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("ChatUsers", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_ChatUsers_userId",
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
    await queryInterface.removeConstraint("ChatUsers", "fk_ChatUsers_chatId");
    await queryInterface.removeConstraint("ChatUsers", "fk_ChatUsers_userId");
  }
};
