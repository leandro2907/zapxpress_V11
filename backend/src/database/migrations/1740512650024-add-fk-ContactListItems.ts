
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("ContactListItems", {
      fields: ["contactListId"],
      type: "foreign key",
      name: "fk_ContactListItems_contactListId",
      references: {
        table: "ContactLists",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("ContactListItems", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_ContactListItems_companyId",
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
    await queryInterface.removeConstraint("ContactListItems", "fk_ContactListItems_contactListId");
    await queryInterface.removeConstraint("ContactListItems", "fk_ContactListItems_companyId");
  }
};
