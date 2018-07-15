var stuff = require('./average');
var fs = require('fs');
jsonFormat = {};
stuff.gdpMap.forEach(function(value, key) {
    jsonFormat[key] = {
        GDP_2012: value,
        POPULATION_2012: stuff.popMap.get(key)
    }
});

//console.log(JSON.stringify(jsonFormat));
fs.writeFileSync('output.json',JSON.stringify(jsonFormat));