const DinnerPartyGuest = require('./DinnerPartyGuest');
const Recipe = require('./Recipe');

const texasburger = new Recipe("texasburger", ["burgerbuns", "onions", "tomatoes", "beefpatties", "lettuce", "bacon"])
const fredo = new DinnerPartyGuest("Fredo", "tomatoes");
const mina = new DinnerPartyGuest("Mina", "onions");
const lotta = new DinnerPartyGuest("Lotta", "beefpatties");
const kimmi = new DinnerPartyGuest("kimmi", "pepperonis");

const food_0 = texasburger.checkRecipe(fredo.name, fredo.foodAtHome, texasburger.ingredients);
const food_1 = texasburger.checkRecipe(mina.name, mina.foodAtHome, texasburger.ingredients);
const food_2 = texasburger.checkRecipe(lotta.name, lotta.foodAtHome, texasburger.ingredients);
const food_3 = texasburger.checkRecipe(kimmi.name, kimmi.foodAtHome, texasburger.ingredients);

console.log(texasburger.kitchenTable, "are already on the kitchentable!");