import { Place } from '../../api/place/place.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Place to pre-fill the Collection.
 * @type {*[]}
 */
const placeSeeds = [
  { area: 'Manoa Valley', temperature: '82F', weather: 'Cloudy' },
  { area: 'Diamond Head', temperature: '85F', weather: 'Sunny' },
];

/**
 * Initialize the Place collection if empty with seed data.
 */
if (Place.find().count() === 0) {
  _.each(placeSeeds, function seedPlaces(place) {
    Place.insert(place);
  });
}
