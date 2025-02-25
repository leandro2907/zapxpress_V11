
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("TicketTraking", {
      fields: ["ticketId"],
      type: "foreign key",
      name: "fk_TicketTraking_ticketId",
      references: {
        table: "Tickets",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("TicketTraking", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_TicketTraking_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("TicketTraking", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_TicketTraking_whatsappId",
      references: {
        table: "Whatsapps",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("TicketTraking", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_TicketTraking_userId",
      references: {
        table: "Users",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("TicketTraking", "fk_TicketTraking_ticketId");
    await queryInterface.removeConstraint("TicketTraking", "fk_TicketTraking_companyId");
    await queryInterface.removeConstraint("TicketTraking", "fk_TicketTraking_whatsappId");
    await queryInterface.removeConstraint("TicketTraking", "fk_TicketTraking_userId");
  }
};
