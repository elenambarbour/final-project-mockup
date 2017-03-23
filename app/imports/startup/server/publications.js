import { Activity } from '../../api/activity/activity.js';
import { Place } from '../../api/place/place.js';
import { Users } from '../../api/users/users.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Activity', function publishActivity() {
  return Activity.find();
});

Meteor.publish('Place', function publishPlace() {
  return Place.find();
});


Meteor.publish('Users', function publishUsers() {
  return Users.find();
});