import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const unfollowUser = async (req, res) => {
  const { id } = req.params;
  const { _id: ownerId } = req.user;

  const user = await userServices.unfollowUser(id, ownerId);

  res.status(HttpCode.OK).json({
    message: `You are no longer following ${user.name}`,
  });
};

export default unfollowUser;
