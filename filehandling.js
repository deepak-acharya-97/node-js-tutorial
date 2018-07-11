var print = require('./deepakmodules');
var fs = require('fs');

var csv = fs.readFileSync('datafile.csv','utf8');
fs.writeFileSync('countries.txt','');
var splitString = csv.split('\n');
var splitByComma;
for (let ind=1; ind < splitString.length-1; ind +=1) {
    splitByComma=splitString[ind].split(',');
    print(splitByComma[0] + ' ' + splitByComma[4] + ' ' + splitByComma[7]);
    fs.appendFileSync('countries.txt',splitByComma[0].split('"')[1]+'\n');
}
/*for (let ind = 0; ind < splitted.length; ind += 1) {
    if(ind < 13 && ind == 0) {
        print(splitted[ind]+' '+splitted[ind+4]);
    } else if (ind % 13 === 0){
        print(ind);
        print(splitted[ind]+' '+splitted[ind+4]);
    }
}*/
