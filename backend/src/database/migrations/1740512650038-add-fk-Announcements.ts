
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Announcements", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Announcements_companyId",
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
    await queryInterface.removeConstraint("Announcements", "fk_Announcements_companyId");
  }
};
