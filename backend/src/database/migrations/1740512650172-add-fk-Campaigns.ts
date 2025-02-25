
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Campaigns", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Campaigns_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("Campaigns", {
      fields: ["contactListId"],
      type: "foreign key",
      name: "fk_Campaigns_contactListId",
      references: {
        table: "ContactLists",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Campaigns", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_Campaigns_whatsappId",
      references: {
        table: "Whatsapps",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Campaigns", {
      fields: ["fileListId"],
      type: "foreign key",
      name: "fk_Campaigns_fileListId",
      references: {
        table: "Files",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Campaigns", "fk_Campaigns_companyId");
    await queryInterface.removeConstraint("Campaigns", "fk_Campaigns_contactListId");
    await queryInterface.removeConstraint("Campaigns", "fk_Campaigns_whatsappId");
    await queryInterface.removeConstraint("Campaigns", "fk_Campaigns_fileListId");
  }
};
