import User from '../../models/User.js';

const getFollowers = async id => {
  const user = await User.findById(id).populate(
    'followers',
    'name email _id avatar'
  );
  const followers = user.followers;
  return followers;
};

export default getFollowers;
