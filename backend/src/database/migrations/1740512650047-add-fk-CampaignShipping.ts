
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("CampaignShipping", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_CampaignShipping_contactId",
      references: {
        table: "ContactListItems",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("CampaignShipping", {
      fields: ["campaignId"],
      type: "foreign key",
      name: "fk_CampaignShipping_campaignId",
      references: {
        table: "Campaigns",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("CampaignShipping", "fk_CampaignShipping_contactId");
    await queryInterface.removeConstraint("CampaignShipping", "fk_CampaignShipping_campaignId");
  }
};
