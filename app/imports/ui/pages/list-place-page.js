import { Template } from 'meteor/templating';
import { Place } from '../../api/place/place.js';

Template.List_Place_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  placeList() {
    return Place.find();
  },
});
