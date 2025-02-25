
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Users", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Users_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Users", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_Users_whatsappId",
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
    await queryInterface.removeConstraint("Users", "fk_Users_companyId");
    await queryInterface.removeConstraint("Users", "fk_Users_whatsappId");
  }
};
