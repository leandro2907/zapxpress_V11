
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("CampaignSettings", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_CampaignSettings_companyId",
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
    await queryInterface.removeConstraint("CampaignSettings", "fk_CampaignSettings_companyId");
  }
};
