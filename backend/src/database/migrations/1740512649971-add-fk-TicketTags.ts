
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("TicketTags", {
      fields: ["ticketId"],
      type: "foreign key",
      name: "fk_TicketTags_ticketId",
      references: {
        table: "Tickets",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("TicketTags", {
      fields: ["tagId"],
      type: "foreign key",
      name: "fk_TicketTags_tagId",
      references: {
        table: "Tags",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("TicketTags", "fk_TicketTags_ticketId");
    await queryInterface.removeConstraint("TicketTags", "fk_TicketTags_tagId");
  }
};
