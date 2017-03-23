import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/list-activity', {
  name: 'List_Activity_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Activity_Page' });
  },
});

FlowRouter.route('/list-place', {
  name: 'List_Place_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Place_Page' });
  },
});

FlowRouter.route('/list-users', {
  name: 'List_Users_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Users_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
