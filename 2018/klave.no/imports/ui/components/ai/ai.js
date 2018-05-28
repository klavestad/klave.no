import { Meteor } from 'meteor/meteor';
import './ai.html';

Template.output.helpers({
  outputs: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});
