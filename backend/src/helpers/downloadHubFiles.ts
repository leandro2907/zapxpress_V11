import axios from "axios";
import { extname, join, basename } from "path";
import { writeFile } from "fs/promises";
import * as fs from "fs"; // Importando fs para usar mkdir
import mime from "mime-types";
import sizeOf from "image-size"; // Usado para verificar o formato real da imagem

export const downloadFiles = async (url: string, companyId: number) => {
  try {
    // Baixa o arquivo
    const { data } = await axios.get(url, {
      responseType: "arraybuffer",
    });

    // Obtém apenas o nome do arquivo sem diretórios da URL
    const originalname = basename(new URL(url).pathname);
    let extension = extname(originalname); // Default para imagens sem extensão
    const filename = `${Date.now()}${extension}`;

    // Caminho correto da pasta public dentro do backend, agora com companyId
    const publicPath = join(__dirname, "..", "..", "public", `company${companyId}`);
    const filePath = join(publicPath, filename);

    // Cria o diretório da empresa caso ele não exista
    await fs.promises.mkdir(publicPath, { recursive: true });

    // Salva o arquivo na pasta public/company{companyId}
    await writeFile(filePath, data);

    // Verifica o formato real da imagem
    const dimensions = sizeOf(data);
    let mimeType = mime.lookup(filePath) || "application/octet-stream";

    // Se a imagem for de fato JPEG ou PNG, vamos ajustar a extensão e MIME type corretamente
    if (mimeType === "application/octet-stream" && dimensions) {
      // Verifica o tipo real da imagem
      if (dimensions.type === "jpeg") {
        mimeType = "image/jpeg";
        extension = ".jpg"; // Ajusta a extensão para JPEG
      } else if (dimensions.type === "png") {
        mimeType = "image/png";
        extension = ".png"; // Ajusta a extensão para PNG
      } else {
        mimeType = "application/octet-stream"; // Para outros tipos de imagem
        extension = ".jpeg"; // Fallback para JPEG
      }

      // Atualiza o nome do arquivo com a extensão correta
      const updatedFileName = `${Date.now()}${extension}`;
      const updatedFilePath = join(publicPath, updatedFileName);

      // Renomeia o arquivo
      await fs.promises.rename(filePath, updatedFilePath);

      return {
        mimeType,
        extension,
        filename: updatedFileName,
        filePath: updatedFilePath,
        originalname,
      };
    }

    return {
      mimeType,
      extension,
      filename,
      filePath,
      originalname,
    };
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    throw error;
  }
};