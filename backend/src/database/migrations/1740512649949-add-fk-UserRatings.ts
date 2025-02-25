
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("UserRatings", {
      fields: ["ticketId"],
      type: "foreign key",
      name: "fk_UserRatings_ticketId",
      references: {
        table: "Tickets",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("UserRatings", {
      fields: ["companyId"],
      type: "foreign key",
      name: "fk_UserRatings_companyId",
      references: {
        table: "Companies",
        field: "id"
      },
      onUpdate: "NO ACTION",
      onDelete: "SET NULL"
    });

    await queryInterface.addConstraint("UserRatings", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_UserRatings_userId",
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
    await queryInterface.removeConstraint("UserRatings", "fk_UserRatings_ticketId");
    await queryInterface.removeConstraint("UserRatings", "fk_UserRatings_companyId");
    await queryInterface.removeConstraint("UserRatings", "fk_UserRatings_userId");
  }
};
