import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowers = async (req, res) => {
  const { id } = req.params;

  const followers = await userServices.getFollowers(id);

  res.status(HttpCode.OK).json({
    followers,
  });
};

export default getFollowers;
