
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("QueueIntegrations", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_QueueIntegrations_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("QueueIntegrations", "fk_QueueIntegrations_companyId");
  }
};
