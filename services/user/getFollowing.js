import User from '../../models/User.js';

const getFollowing = async id => {
  const user = await User.findById(id).populate(
    'following',
    'name email _id avatar'
  );
  const following = user.following;
  return following;
};

export default getFollowing;
