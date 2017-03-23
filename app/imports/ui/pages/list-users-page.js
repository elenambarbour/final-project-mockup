import { Template } from 'meteor/templating';
import { Users } from '../../api/users/users.js';

Template.List_Users_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  usersList() {
    return Users.find();
  },
});
