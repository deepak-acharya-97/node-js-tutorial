var fs = require('fs');
var print = require('./deepakmodules');

/*var readMe = fs.readFileSync('readme.txt', 'utf8');
print(readMe);
fs.writeFileSync('writeMe.txt',readMe);*/

fs.readFile('readme.txt','utf8', function (err, data) {
    fs.writeFile('writeMe.txt', data);
});

print("Hi");