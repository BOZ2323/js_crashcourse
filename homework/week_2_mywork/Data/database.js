const fs = require('fs');

const chooseDataJson = {
    DinnerPartyguest: {
        name: 'DinnerPartyGuest',
        file: './Data/Dinnerguest_data.json'
    },
    Recipe: {
        name: 'Recipe',
        file: './Data/Recipe_data.json'
    },
}
exports.save = (database, item) => {
    const name = chooseDataJson[database].name
    const file = chooseDataJson[database].file

    fs.writeFileSync(file, JSON.stringify({
        [name]: item
    }))
}
exports.load = (database) => {
    const file = chooseDataJson[database].file
    return JSON.parse(fs.readFileSync(file, 'utf8'))
}