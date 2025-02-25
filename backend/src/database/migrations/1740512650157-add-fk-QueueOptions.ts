
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("QueueOptions", {
      fields: ["queueId"],
      type: "foreign key",
      name: "fk_QueueOptions_queueId",
      references: {
        table: "Queues",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("QueueOptions", {
      fields: ["parentId"],
      type: "foreign key",
      name: "fk_QueueOptions_parentId",
      references: {
        table: "QueueOptions",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("QueueOptions", "fk_QueueOptions_queueId");
    await queryInterface.removeConstraint("QueueOptions", "fk_QueueOptions_parentId");
  }
};
