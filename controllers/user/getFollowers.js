import userServices from '../../services/user/index.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowers = async (req, res) => {
  const { _id: id } = req.user;

  const followers = await userServices.getFollowers(id);

  res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
    followers,
  });
};

export default getFollowers;
