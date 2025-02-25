
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Invoices", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Invoices_companyId",
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
    await queryInterface.removeConstraint("Invoices", "fk_Invoices_companyId");
  }
};
