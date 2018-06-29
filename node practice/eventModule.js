var events = require('events');
var eventMitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('I hear a scream!');
}

//Assign the event handler to event.
eventMitter.on('scream', myEventHandler);
// Fire the scream event.
eventMitter.emit('scream');