var stuffs = require('./node1');

const print = msg => console.log(msg);

console.log('Hi Deepak!');
/* setTimeout(function () {
    console.log('3 seconds passed');
},3000);

time = 0;
var timer = setInterval(function (){
    time += 2;
    print(time + ' seconds passed');
    if (time > 5) {
        clearInterval(timer);
    }
},2000); */

print(__dirname);
print(__filename);

//normal function

function sayHi() {
    print('hi');
}
sayHi();

//function expression

var sayBye = function () {
    print('bye');
}

sayBye();

function callFunction (func) {
    func();
}

callFunction(sayHi);

print(stuffs.counter([1,4,6]));
print(stuffs.adder(2,4));
print(stuffs.pi);