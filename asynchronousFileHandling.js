const fs  = require('fs');

const readFileAsynch = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
        console.log('rd '+new Date())
    });
});

const writeFileAsync = (filePath, data) => new Promise((resolve) => {
    fs.writeFile(filePath, data, () => {
        resolve("success");
    });
});

readFileAsynch('input.txt').then((data) => {
    console.log(fs.existsSync('aatestWrite.txt'));
    const promiseStatus = writeFileAsync('aatestWrite.txt', data);
    console.log(promiseStatus);
    promiseStatus.then((msg) => {
        console.log(fs.existsSync('aatestWrite.txt'));
        const read = fs.readFileSync('aatestWrite.txt','utf8');
        console.log(read);
        console.log(promiseStatus);
        console.log('ps '+new Date());
    });
});
