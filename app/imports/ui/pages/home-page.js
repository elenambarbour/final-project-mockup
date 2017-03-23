import { Template } from 'meteor/templating';
import { Activity } from '../../api/activity/activity.js';
import { Place } from '../../api/place/place.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  activityList() {
    return Activity.find();
  },
  placeList() {
    return Place.find();
  },
  usersList() {
    return Users.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Activity');
  this.subscribe('Place');
  this.subscribe('Users');
});

