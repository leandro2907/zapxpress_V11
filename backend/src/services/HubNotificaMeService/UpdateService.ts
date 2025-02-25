import AppError from "../../errors/AppError";
import HubNotificaMe from "../../models/HubNotificaMe";

interface Data {
  nome: string;
  token: string;
  userId: number | string;
  id?: number | string;
}

const UpdateService = async (data: Data): Promise<HubNotificaMe> => {
  const { id, nome, token,  userId } = data;

  const record = await HubNotificaMe.findByPk(id);

  if (!record) {
    throw new AppError("ERR_NO_TICKETNOTE_FOUND", 404);
  }

  await record.update({
    nome,
    token,
    userId
  });

  return record;
};

export default UpdateService;
