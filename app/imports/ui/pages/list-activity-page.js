import { Template } from 'meteor/templating';
import { Activity } from '../../api/activity/activity.js';

Template.List_Activity_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  activityList() {
    return Activity.find();
  },
});
