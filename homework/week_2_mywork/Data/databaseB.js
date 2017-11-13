const fs = require('fs');
//this works!
// exports.save = (allGuests, cb) => {
//     fs.writeFile('./Data/Dinnerguest_data.json', JSON.stringify(allGuests), cb);
// };
// exports.load = () => {
//     return JSON.parse(fs.readFile('./Data/Dinnerguest_data.json', 'utf8'));
// };

exports.writeWeeks = async(array) => {
    await fs.writeFileSync('./dataweeks.json', JSON.stringify(array));
}

exports.readTopics = () => {
    return JSON.parse(fs.readFileSync('./datatopics.json', 'utf8'));
}