var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
}

var adder = function (a,b) {
    return `The sum Of ${a} and ${b} is ${a+b}`;
}

var pi = Math.PI;
//console.log(counter([1,2,4]));

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;