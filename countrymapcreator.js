var fs = require('fs');

var read = fs.readFileSync('cc-mapping.txt','utf8');
var splitString = read.split('\n');
var countyMap = new Map();
for (let i=0; i<splitString.length; i += 1) {
    temp = splitString[i].split(',');
    countyMap.set(temp[0],temp[1]);
}
var mapCountryPopulationGdp = new Map();
var csv = fs.readFileSync('datafile.csv','utf8');
csv.replace(/"/g,'')
console.log(csv);
var splitString = csv.split('\n');
var splitByComma;
for (let ind=1; ind < splitString.length-1; ind +=1) {
    splitByComma=splitString[ind].split(',');
    if (splitByComma[0].slice(1,-1) !== 'European Union') {
        mapCountryPopulationGdp.set(splitByComma[0].slice(1,-1),[splitByComma[4].slice(1,-1),splitByComma[7].slice(1,-1),countyMap.get(splitByComma[0].slice(1,-1))]);
    }    
}
module.exports = mapCountryPopulationGdp;