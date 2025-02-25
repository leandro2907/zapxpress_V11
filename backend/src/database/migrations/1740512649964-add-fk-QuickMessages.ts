
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("QuickMessages", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_QuickMessages_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("QuickMessages", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_QuickMessages_userId",
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
    await queryInterface.removeConstraint("QuickMessages", "fk_QuickMessages_companyId");
    await queryInterface.removeConstraint("QuickMessages", "fk_QuickMessages_userId");
  }
};
