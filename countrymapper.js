var print = require('./deepakmodules');
var fs = require('fs');
var read = fs.readFileSync('Countries-Continents.txt','utf8');
fs.writeFileSync('cc-mapping.txt','');
splitString = read.split('\n');
let temp;
print(splitString.length);
for (let ind = 0; ind <splitString.length - 1; ind += 1){
    temp = splitString[ind].split(',');
    fs.appendFileSync('cc-mapping.txt', temp[1] + ',' + temp[0] + '\n');
}
