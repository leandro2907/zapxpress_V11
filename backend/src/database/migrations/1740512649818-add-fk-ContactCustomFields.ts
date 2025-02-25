
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("ContactCustomFields", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_ContactCustomFields_contactId",
      references: {
        table: "Contacts",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("ContactCustomFields", "fk_ContactCustomFields_contactId");
  }
};
