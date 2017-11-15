const DinnerPartyGuest = require('./DinnerPartyGuest');
const Recipe = require('./Recipe');
const DatabaseA = require('./Data/databaseA');
const DatabaseB = require('./Data/databaseB');
//this works: Part A
//const Database = require('./Data/database');

console.log("Show, you are not afraid!!")

const Burger = new Recipe('Burger', ['burgerbuns', 'onions', 'tomatoes', 'cheese', 'lettuce', 'beefpatties']);
const Pasta = new Recipe('Pasta', ['pasta', 'onions', 'tomatoes', 'garlic', 'sardines', 'babyspinach']);
const SpringRolls = new Recipe('Springrolls', ['ricepaper', 'carrots', 'hoisin sauce', 'rice', 'coriander', 'springonions']);

const Fredo = new DinnerPartyGuest('Fredo', 'tomatoes');
const Mina = new DinnerPartyGuest('Mina', 'pasta');
const Sascha = new DinnerPartyGuest('Sascha', 'lettuce');

const allGuests = [Fredo, Mina, Sascha];
const allRecipes = [Burger, Pasta, SpringRolls];

DatabaseA.save(allRecipes);
DatabaseB.save(allGuests, (err, cb) => { console.log(err) });
console.log("are we there yet?")

const loadedRecipes = DatabaseA.load('Recipe');
const firstRecipe = Recipe.create(loadedRecipes[1]);


//*********
DatabaseB.load((loadedGuests) => {
    const firstPerson = DinnerPartyGuest.create(loadedGuests[0]);
    console.log(loadedGuests[0]);
    const convertedRecipes = loadedRecipes.map(Recipe.create);
    convertedRecipes[2].sayName();
});

//*********
// const firstPerson = DinnerPartyGuest.create(loadedGuests[0]);
// const convertedRecipes = loadedRecipes.map(Recipe.create);
// convertedRecipes[2].sayName();

// firstPerson.sayName();
// firstRecipe.sayName();
// firstRecipe.checkRecipe('mina', 'sauerkraut', firstRecipe.ingredients)