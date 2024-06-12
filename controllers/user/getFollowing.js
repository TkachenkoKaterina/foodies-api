import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowing = async (req, res) => {
  const { _id: id } = req.user;
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const settings = { skip, limit };

  const data = await userServices.getFollowing(id, { settings });

  res.status(HttpCode.OK).json({
    ...data,
  });
};

export default getFollowing;
