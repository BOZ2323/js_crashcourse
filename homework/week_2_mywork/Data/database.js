const fs = require('fs');

const chooseDataJson = {
    DinnerPartyGuest: {
        name: 'DinnerPartyGuest',
        file: './Data/Dinnerguest_data.json'
    },
    Recipe: {
        name: 'Recipe',
        file: './Data/Recipe_data.json'
    },
}
exports.save = (database, cb) => {
    const name = chooseDataJson[database].name;
    const file = chooseDataJson[database].file;
    console.log("***", file);

    fs.writeFileSync(file, JSON.stringify(
        name), cb)
}
exports.load = (database) => {
    console.log(database);
    const file = chooseDataJson[database].file
    return JSON.parse(fs.readFileSync(file, 'utf8'))
}