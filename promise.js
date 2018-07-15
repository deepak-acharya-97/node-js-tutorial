const print = (msg) => console.log(msg);

const lazyAddition = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(a+b), 3000);
});
const lazyMultiplication = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(a*b), 3000);
});
lazyAddition(50,50).then((addedValue) => console.log(addedValue));
Promise.all([lazyAddition(50,50), lazyMultiplication(5,5)]).then( values => console.log(values));