
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Queues", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Queues_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Queues", {
      fields: ["promptId"],
      type: "foreign key",
      name: "fk_Queues_promptId",
      references: {
        table: "Prompts",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Queues", {
      fields: ["integrationId"],
      type: "foreign key",
      name: "fk_Queues_integrationId",
      references: {
        table: "QueueIntegrations",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Queues", "fk_Queues_companyId");
    await queryInterface.removeConstraint("Queues", "fk_Queues_promptId");
    await queryInterface.removeConstraint("Queues", "fk_Queues_integrationId");
  }
};
