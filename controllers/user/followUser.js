import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const followUser = async (req, res) => {
  const { id } = req.params;
  const { _id: ownerId } = req.user;

  const user = await userServices.followUser(id, ownerId);

  res.status(HttpCode.OK).json({
    message: `You are now following ${user.name}`,
  });
};

export default followUser;
