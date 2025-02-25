
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Prompts", {
      fields: ["queueId"],
      type: "foreign key",
      name: "fk_Prompts_queueId",
      references: {
        table: "Queues",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "NO ACTION"
    });

    await queryInterface.addConstraint("Prompts", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Prompts_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "NO ACTION"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Prompts", "fk_Prompts_queueId");
    await queryInterface.removeConstraint("Prompts", "fk_Prompts_companyId");
  }
};
