var fs = require('fs');

const print = msg => console.log(msg);

let fileContents;


const getMyData = () => fileContents;

const readFileAsync = () => {
    fs.readFile('cc-mapping.txt','utf8',function (err,data) {
        fileContents = data;
    });
};
