const fs = require('fs');


exports.save = (guests) => {
    fs.writeFileSync('./Data/data.json', JSON.stringify(guests))
}
exports.load = () => {
    return JSON.parse(fs.readFileSync('./Data/data.json', 'utf8'))
}