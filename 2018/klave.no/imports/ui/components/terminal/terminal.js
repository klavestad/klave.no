import { Meteor } from 'meteor/meteor';
import { Typed } from 'meteor/chrisbutler:typed.js';

import './terminal.html';

if (Meteor.isClient) {
  Template.terminal.onRendered(function() {
    $(function(){

    $("#typed").Typed({
      strings: ["Typed.js is a JavaScript library.", "It tyops out", "It types out sentences.", "And then deletes them.", "Try it out!"],
      typeSpeed: 30,
      callback: function(){
        shift();
      }
    });

    });
    function shift(){
        $(".head-wrap").addClass("shift-text");
        terminalHeight();
    }

    function terminalHeight(){
        var termHeight = $(".terminal-height");
        var value = termHeight.text();
        value = parseInt(value);
        setTimeout(function(){
            if (value > 10){
                value = value-1;
                this.txtValue = value.toString();
                termHeight.text(this.txtValue);
                self.terminalHeight();
            }
            else{
                clearTimeout();
            }
        }, 10);
    }
  });
}
