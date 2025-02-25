
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Contacts", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Contacts_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Contacts", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_Contacts_whatsappId",
      references: {
        table: "Whatsapps",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Contacts", "fk_Contacts_companyId");
    await queryInterface.removeConstraint("Contacts", "fk_Contacts_whatsappId");
  }
};
