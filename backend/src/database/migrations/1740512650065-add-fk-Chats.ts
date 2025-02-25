
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Chats", {
      fields: ["ownerId"],
      type: "foreign key",
      name: "fk_Chats_ownerId",
      references: {
        table: "Users",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("Chats", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Chats_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Chats", "fk_Chats_ownerId");
    await queryInterface.removeConstraint("Chats", "fk_Chats_companyId");
  }
};
