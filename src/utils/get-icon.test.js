// @flow strict
import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('twitter')).toBe(ICONS.TWITTER);
  expect(getIcon('email')).toEqual(ICONS.EMAIL);
  expect(getIcon('linkedin')).toEqual(ICONS.LINKEDIN);
  expect(getIcon('instagram')).toEqual(ICONS.INSTAGRAM);
  expect(getIcon('facebook')).toEqual(ICONS.FACEBOOK);
});