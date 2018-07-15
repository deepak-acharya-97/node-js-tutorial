const fs = require('fs');

const ccmapper = fs.readFileSync('cc-mapping.txt','utf8').split('\n');
countryContinentMap = new Map();
for(let i=0; i<ccmapper.length; i+=1) {
  let splitComma = ccmapper[i].split(',');
  countryContinentMap.set(splitComma[0],splitComma[1]);
}
const data = fs.readFileSync('datafile 2015.csv', 'utf8');
const rowOfContents = data.replace(/["']+/g, '').split('\n');
const headers = rowOfContents[0].split(',');
let objectArray = [];
for (let i = 1; i < rowOfContents.length - 2; i += 1) {
  obj = {};
  let splitByComma = rowOfContents[i].split(',');
  for (let j = 0; j < headers.length; j += 1) {
    if (j==0) obj[headers[j]] = splitByComma[j];
    else obj[headers[j]] = parseFloat(splitByComma[j]);
  }
  obj['Continent'] = countryContinentMap.get(splitByComma[0]);
  objectArray.push(obj);
}
toJSONObject ={};
objectArray.forEach((obj) => {
  try {
    toJSONObject[obj.Continent].GDP_2012 += obj['GDP Billions (USD) 2012'];
    toJSONObject[obj.Continent].POPULATION_2012 += obj['Population (Millions) 2012'];
    toJSONObject[obj.Continent].GDP_2015 += obj['GDP Billions (USD) 2015'];
    toJSONObject[obj.Continent].POPULATION_2015 += obj['Population (Millions) 2015'];
  } catch(e) {
    //console.log(obj.Continent);
    toJSONObject[obj['Continent']] = {
      GDP_2012: obj['GDP Billions (USD) 2012'],
      POPULATION_2012: obj['Population (Millions) 2012'],
      GDP_2015: obj['GDP Billions (USD) 2015'],
      POPULATION_2015: obj['Population (Millions) 2015']
    };
  }
});
//console.log(objectArray);
fs.writeFileSync('output.json',JSON.stringify(toJSONObject, 2, 2));