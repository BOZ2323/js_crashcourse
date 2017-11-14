const fs = require('fs');

// async Version: doesn' work
exports.save = (allGuests, cb) => {
    fs.writeFile('./Data/Dinnerguest_data.json', JSON.stringify(allGuests), cb)
};
exports.load = () => {
    return JSON.parse(fs.readFile('./Data/Dinnerguest_data.json', 'utf8'))
};

//sync Version: works

// exports.save = (allGuests) => {
//     fs.writeFileSync('./Data/Dinnerguest_data.json', JSON.stringify(allGuests))
// }
// exports.load = () => {
//     return JSON.parse(fs.readFileSync('./Data/Dinnerguest_data.json', 'utf8'))
// }