
import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint("FilesOptions", {
      fields: ["fileId"],
      type: "foreign key",
      name: "fk_FilesOptions_fileId",
      references: {
        table: "Files",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

  },

  down: async (queryInterface: QueryInterface) => {
    // Removendo as chaves estrangeiras
    await queryInterface.removeConstraint("FilesOptions", "fk_FilesOptions_fileId");
  }
};
