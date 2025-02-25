
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("BaileysChats", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_BaileysChats_whatsappId",
      references: {
        table: "Whatsapps",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("BaileysChats", "fk_BaileysChats_whatsappId");
  }
};
