import Auth from '/imports/ui/services/auth';
import Users from '/imports/api/users';

const ROLE_MODERATOR = Meteor.settings.public.user.role_moderator;

// to be used soon (Paulo)
const amIModerator = function () {
  return Users.findOne({ userId: Auth.userID },
      { fields: { role: 1 } }).role === ROLE_MODERATOR;
}

export default {
  amIModerator: () => amIModerator()
};

