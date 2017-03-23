import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Place = new Mongo.Collection('Place');

/**
 * Create the schema for Place
 */
export const PlaceSchema = new SimpleSchema({
  area: {
    label: 'area',
    type: String,
    optional: false,
    max: 200,
  },
  temperature: {
    label: 'temperature',
    type: String,
    optional: false,
    max: 200,
  },
  weather: {
    label: 'weather',
    type: String,
    optional: false,
  },
});

Place.attachSchema(PlaceSchema);
