import { Users } from '../../api/users/users.js';
import { _ } from 'meteor/underscore';

/**
 * A list of users to pre-fill the Collection.
 * @type {*[]}
 */
const usersSeeds = [
  { first: 'Halley', last: 'Day', area: 'Diamond Head', level: 'Expert' },
  { first: 'Herbert', last: 'Martin', area: 'Waikiki', level: 'Intermediate' },
  { first: 'Gary', last: 'Haunt', area: 'Kaimuki', level: 'Novice' },
];

/**
 * Initialize the Place collection if empty with seed data.
 */
if (Users.find().count() === 0) {
  _.each(usersSeeds, function seedUsers(user) {
    Users.insert(user);
  });
}
