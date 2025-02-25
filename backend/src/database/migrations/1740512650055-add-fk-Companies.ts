
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Companies", {
      fields: ["planId"],
      type: "foreign key",
      name: "fk_Companies_planId",
      references: {
        table: "Plans",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Companies", "fk_Companies_planId");
  }
};
