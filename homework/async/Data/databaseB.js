const fs = require('fs');

exports.save = (allGuests, cb) => {
    fs.writeFile('./Data/Dinnerguest_data.json', JSON.stringify(allGuests), cb)
};

//********
exports.load = (cb) => {
    fs.readFile('./Data/Dinnerguest_data.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data)
            // console.log(JSON.parse(data))
        cb(JSON.parse(data))
            // return (JSON.parse(data))
    });
};