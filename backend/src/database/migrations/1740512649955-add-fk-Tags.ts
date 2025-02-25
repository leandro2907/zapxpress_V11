
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Tags", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Tags_companyId",
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
    await queryInterface.removeConstraint("Tags", "fk_Tags_companyId");
  }
};
