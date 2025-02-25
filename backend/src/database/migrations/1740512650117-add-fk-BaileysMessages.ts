
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("BaileysMessages", {
      fields: ["whatsappId"],
      type: "foreign key",
      name: "fk_BaileysMessages_whatsappId",
      references: {
        table: "Whatsapps",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    await queryInterface.addConstraint("BaileysMessages", {
      fields: ["baileysChatId"],
      type: "foreign key",
      name: "fk_BaileysMessages_baileysChatId",
      references: {
        table: "BaileysChats",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("BaileysMessages", "fk_BaileysMessages_whatsappId");
    await queryInterface.removeConstraint("BaileysMessages", "fk_BaileysMessages_baileysChatId");
  }
};
