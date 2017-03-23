import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Activity = new Mongo.Collection('Activity');

/**
 * Create the schema for Stuff
 */
export const ActivitySchema = new SimpleSchema({
  title: {
    label: 'title',
    type: String,
    optional: false,
    max: 200,
  },
  place: {
    label: 'place',
    type: String,
    optional: false,
    max: 200,
  },
  level: {
    label: 'level',
    type: String,
    optional: false,
  },
});

Activity.attachSchema(ActivitySchema);
