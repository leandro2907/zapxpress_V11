
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Whatsapps", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Whatsapps_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Whatsapps", {
      fields: ["promptId"],
      type: "foreign key",
      name: "fk_Whatsapps_promptId",
      references: {
        table: "Prompts",
        field: "id"
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT"
    });

    await queryInterface.addConstraint("Whatsapps", {
      fields: ["integrationId"],
      type: "foreign key",
      name: "fk_Whatsapps_integrationId",
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
    await queryInterface.removeConstraint("Whatsapps", "fk_Whatsapps_companyId");
    await queryInterface.removeConstraint("Whatsapps", "fk_Whatsapps_promptId");
    await queryInterface.removeConstraint("Whatsapps", "fk_Whatsapps_integrationId");
  }
};
