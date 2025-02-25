
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("TicketNotes", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_TicketNotes_userId",
      references: {
        table: "Users",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("TicketNotes", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_TicketNotes_contactId",
      references: {
        table: "Contacts",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("TicketNotes", {
      fields: ["ticketId"],
      type: "foreign key",
      name: "fk_TicketNotes_ticketId",
      references: {
        table: "Tickets",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("TicketNotes", "fk_TicketNotes_userId");
    await queryInterface.removeConstraint("TicketNotes", "fk_TicketNotes_contactId");
    await queryInterface.removeConstraint("TicketNotes", "fk_TicketNotes_ticketId");
  }
};
