var mapCountryPopulationGdp = require('./countrymapcreator');

console.log(mapCountryPopulationGdp.entries());
let gdpMap = new Map();
let popMap = new Map();
mapCountryPopulationGdp.forEach(function(value,key){
    console.log(value[1]);
    if(popMap.has(value[2])){
        popMap.set(value[2],parseFloat(popMap.get(value[2]))+parseFloat(value[0]));
    } else {
        popMap.set(value[2],parseFloat(value[0]));
    }
    if(gdpMap.has(value[2])) {
        gdpMap.set(value[2],parseFloat(gdpMap.get(value[2]))+parseFloat(value[1]));
    } else {
        gdpMap.set(value[2],parseFloat(value[1]));
    }
});
console.log(popMap.entries());
console.log(gdpMap.entries());