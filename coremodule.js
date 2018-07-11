let events = require('events');
let util = require('util');

/*var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(msg){
   console.log(msg); 
});

myEmitter.emit('someEvent', 'the event was emitted');*/

var Person = function(name) {
    this.name=name;
}
util.inherits(Person, events.EventEmitter);
var john = new Person('John');
var sundar = new Person('Sundar');
var virat = new Person('Virat');

var people = [john, sundar, virat];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

john.emit('speak','hey dudes');
sundar.emit('speak','I want a curry');