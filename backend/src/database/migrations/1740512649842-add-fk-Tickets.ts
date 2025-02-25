
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("Tickets", {
      fields: ["contactId"],
      type: "foreign key",
      name: "fk_Tickets_contactId",
      references: {
        table: "Contacts",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("Tickets", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_Tickets_userId",
      references: {
        table: "Users",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Tickets", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_Tickets_whatsappId",
      references: {
        table: "Whatsapps",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Tickets", {
      fields: ["queueId"],
      type: "foreign key",
      name: "fk_Tickets_queueId",
      references: {
        table: "Queues",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Tickets", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_Tickets_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Tickets", {
      fields: ["queueOptionId"],
      type: "foreign key",
      name: "fk_Tickets_queueOptionId",
      references: {
        table: "QueueOptions",
        field: "id"
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("Tickets", {
      fields: ["integrationId"],
      type: "foreign key",
      name: "fk_Tickets_integrationId",
      references: {
        table: "QueueIntegrations",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "NO ACTION"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_contactId");
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_userId");
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_whatsappId");
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_queueId");
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_companyId");
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_queueOptionId");
    await queryInterface.removeConstraint("Tickets", "fk_Tickets_integrationId");
  }
};
