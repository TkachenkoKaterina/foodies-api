import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowers = async (req, res) => {
  const { id } = req.params;

  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const settings = { skip, limit };

  const data = await userServices.getFollowers(id, { settings });

  res.status(HttpCode.OK).json({
    ...data,
  });
};

export default getFollowers;
