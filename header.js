const fs = require('fs');

data1 = fs.readFileSync('input.txt','utf8');
data2 = data1.replace(/["']+/g,'').split(',');
data = data2.join('\n');
fs.writeFileSync('out1.txt',data);
