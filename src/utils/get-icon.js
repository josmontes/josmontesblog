// @flow strict
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'instagram':
      icon = ICONS.INSTAGRAM;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
