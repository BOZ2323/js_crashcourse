const DinnerPartyGuest = require('./DinnerPartyGuest');
const Recipe = require('./Recipe');
const Database = require('./Data/database');



const allRecipes = [];
const Burger = new Recipe('Burger', ['burgerbuns', 'onions', 'tomatoes', 'cheese', 'lettuce', 'beefpatties']);
allRecipes.push('Burger');
const Pasta = new Recipe('Pasta', ['pasta', 'onions', 'tomatoes', 'garlic', 'sardines', 'babyspinach']);
allRecipes.push('Pasta');
const SpringRolls = new Recipe('Springrolls', ['ricepaper', 'carrots', 'hoisin sauce', 'rice', 'coriander', 'springonions']);
allRecipes.push('Springrolls');




const allGuests = [];
const Fredo = new DinnerPartyGuest('Fredo', 'tomatoes');
allGuests.push('Fredo');
const Mina = new DinnerPartyGuest('Mina', 'pasta');
allGuests.push('Mina');
const Sascha = new DinnerPartyGuest('Sascha', 'lettuce');
allGuests.push('Sascha');


Database.save(allRecipes);
Database.save(allGuests);

const loadedRecipes = Database.load('Recipe');
const firstRecipe = Recipe.create(loadedRecipes[1]);
const loadedGuests = Database.load('DinnerPartyGuest');
const firstPerson = DinnerPartyGuest.create(loadedGuests[0]);
const secondPerson = DinnerPartyGuest.create(loadedGuests[1]);
//with create() you dont need to know anything about the inner properties of a class


/* firstPerson.sayName();
secondPerson.sayName();
firstRecipe.sayName();
firstRecipe.checkRecipe('mina', 'sauerkraut', firstRecipe.ingredients) */