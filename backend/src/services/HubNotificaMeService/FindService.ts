import { Op } from "sequelize";
import HubNotificaMe from "../../models/HubNotificaMe";
import Company from "../../models/Company";

type Params = {
  companyId: string;
  userId: string;
};

const FindService = async ({ companyId, userId }: Params): Promise<HubNotificaMe[]> => {
  const records: HubNotificaMe[] = await HubNotificaMe.findAll({
    where: {
      companyId,
      userId
    },
    include: [{ model: Company, as: "company", attributes: ["id", "name"] }],
    order: [["id", "ASC"]]
  });

  return records;
};

export default FindService;
