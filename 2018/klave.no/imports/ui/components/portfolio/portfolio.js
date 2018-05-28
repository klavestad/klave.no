import { Meteor } from 'meteor/meteor';
import './portfolio.html';

if (Meteor.isClient) {
  Template.portfolio.onRendered(function() {
    $('.materialboxed').materialbox();
  });
}
