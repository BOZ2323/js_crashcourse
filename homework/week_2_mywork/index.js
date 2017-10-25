const DinnerPartyGuest = require('./DinnerPartyGuest');
const Recipe = require('./Recipe');

const texasburger = new Recipe("texasburger", ["burgerbuns", "onions", "tomatoes", "beefpatties", "lettuce", "bacon"])
const fredo = new DinnerPartyGuest("Fredo", "tomatoes");

console.log(texasburger.checkRecipe(fredo.foodAtHome, texasburger.ingredients));

console.log(fredo);
console.log(texasburger);