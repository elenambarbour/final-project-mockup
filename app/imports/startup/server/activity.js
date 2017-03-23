import { Activity } from '../../api/activity/activity.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const activitySeeds = [
  { title: 'St. Louis Heights', place: 'Manoa', level: 'Expert' },
  { title: 'Surfing in Waikiki', place: 'Waikiki', level: 'Novice' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Activity.find().count() === 0) {
  _.each(activitySeeds, function seedActivities(activity) {
    Activity.insert(activity);
  });
}
