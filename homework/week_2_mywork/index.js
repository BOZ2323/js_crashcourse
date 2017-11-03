const DinnerPartyGuest = require('./DinnerPartyGuest');
const Recipe = require('./Recipe');
const Database = require('./Data/database');

const loadedRecipes = Database.load('Recipe')
const firstRecipe = Recipe.create(loadedRecipes[1]);
const loadedGuests = Database.load('DinnerPartyGuest');
const firstPerson = DinnerPartyGuest.create(loadedGuests[0]);
const secondPerson = DinnerPartyGuest.create(loadedGuests[1]);
//with create() you dont need to know anything about the inner properties of a class
firstPerson.sayName();
secondPerson.sayName();
firstRecipe.sayName();
firstRecipe.checkRecipe('mina', 'sauerkraut', firstRecipe.ingredients)