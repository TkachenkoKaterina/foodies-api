import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowing = async (req, res) => {
  const { _id: id } = req.user;

  const following = await userServices.getFollowing(id);

  res.status(HttpCode.OK).json({
    following,
  });
};

export default getFollowing;
