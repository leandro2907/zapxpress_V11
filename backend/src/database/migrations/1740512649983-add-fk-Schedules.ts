
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Schedules", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_Schedules_contactId",
      references: {
        table: "Contacts",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("Schedules", {
      fields: ["ticketId"],
      type: "foreign key",
      name: "fk_Schedules_ticketId",
      references: {
        table: "Tickets",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Schedules", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_Schedules_userId",
      references: {
        table: "Users",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Schedules", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Schedules_companyId",
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
    await queryInterface.removeConstraint("Schedules", "fk_Schedules_contactId");
    await queryInterface.removeConstraint("Schedules", "fk_Schedules_ticketId");
    await queryInterface.removeConstraint("Schedules", "fk_Schedules_userId");
    await queryInterface.removeConstraint("Schedules", "fk_Schedules_companyId");
  }
};
