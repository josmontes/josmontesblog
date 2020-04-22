// @flow strict
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('linkedin', '#')).toBe('https://www.linkedin.com/in/#');
  expect(getContactHref('instagram', '#')).toBe('https://www.instagram.com/#');
  expect(getContactHref('facebook', '#')).toBe('https://www.facebook.com/#');
});
