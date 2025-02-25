
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Messages", {
      fields: ["ticketId"],
      type: "foreign key",
      name: "fk_Messages_ticketId",
      references: {
        table: "Tickets",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("Messages", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_Messages_contactId",
      references: {
        table: "Contacts",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("Messages", {
      fields: ["quotedMsgId"],
      type: "foreign key",
      name: "fk_Messages_quotedMsgId",
      references: {
        table: "Messages",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Messages", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Messages_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Messages", {
      fields: ["queueId"],
      type: "foreign key",
      name: "fk_Messages_queueId",
      references: {
        table: "Queues",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Messages", "fk_Messages_ticketId");
    await queryInterface.removeConstraint("Messages", "fk_Messages_contactId");
    await queryInterface.removeConstraint("Messages", "fk_Messages_quotedMsgId");
    await queryInterface.removeConstraint("Messages", "fk_Messages_companyId");
    await queryInterface.removeConstraint("Messages", "fk_Messages_queueId");
  }
};
