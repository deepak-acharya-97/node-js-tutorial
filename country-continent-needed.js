const fs = require('fs');

const ccmapper = fs.readFileSync('cc-mapping.txt', 'utf8').split('\n');
countryContinentMap = new Map();
for (let i = 0; i < ccmapper.length; i += 1) {
  let splitComma = ccmapper[i].split(',');
  countryContinentMap.set(splitComma[0], splitComma[1]);
}
const data = fs.readFileSync('datafile 2015.csv', 'utf8');
const rowOfContents = data.split('\n');
const headers = rowOfContents[0].replace(/["']+/g, '').split(',');
let objectArray = [];
fs.writeFileSync('country-continent-g20.csv','');
for (let i = 1; i < rowOfContents.length - 1; i += 1) {
  obj = {};
  let splitByComma = rowOfContents[i].replace(/["']+/g, '').split(',');
  let line = splitByComma[0]+','+countryContinentMap.get(splitByComma[0])+'\n';
  fs.appendFileSync('country-continent-g20.csv',line);
}