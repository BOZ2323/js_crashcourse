// const fs = require('fs');
// //this works!
// exports.save = (allRecipe) => {
//     fs.writeFileSync('./Data/Recipe_data.json', JSON.stringify(allRecipe))
// }
// exports.load = () => {
//     return JSON.parse(fs.readFileSync('./Data/Recipe_data.json', 'utf8'))
// }


const fs = require('fs');
//this works!
exports.save = (allRecipe) => {
    fs.writeFileSync('./Data/Recipe_data.json', JSON.stringify(allRecipe))
}
exports.load = () => {
    return JSON.parse(fs.readFileSync('./Data/Recipe_data.json', 'utf8'))
}