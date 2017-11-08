const fs = require('fs');
//this works!
exports.save = (allGuests) => {
    fs.writeFileSync('./Data/Dinnerguest_data.json', JSON.stringify(allGuests))
}
exports.load = () => {
    return JSON.parse(fs.readFileSync('./Data/Dinnerguest_data.json', 'utf8'))
}

/* const chooseDataJson = {
    DinnerPartyguest: {
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
    console.log(name);

    fs.writeFileSync(file, JSON.stringify({
        [name]: item
    }))
}

exports.load = (database) => {
    console.log(database);
    const file = chooseDataJson[database].file
    return JSON.parse(fs.readFileSync(file, 'utf8'))
} */