const DinnerPartyGuest = require('./DinnerPartyGuest');
const Recipe = require('./Recipe');
const Database = require('./Data/database');

const texasburger = new Recipe("texasburger", ["burgerbuns", "onions", "tomatoes", "beefpatties", "lettuce", "bacon"])
    //const fredo = new DinnerPartyGuest("Fredo", "tomatoes");
    //const mina = new DinnerPartyGuest("Mina", "onions");
    //const lotta = new DinnerPartyGuest("Lotta", "beefpatties");
    //const kimmi = new DinnerPartyGuest("kimmi", "pepperonis");

//const food_0 = texasburger.checkRecipe(fredo.name, fredo.foodAtHome, texasburger.ingredients);
//const food_1 = texasburger.checkRecipe(mina.name, mina.foodAtHome, texasburger.ingredients);
//const food_2 = texasburger.checkRecipe(lotta.name, lotta.foodAtHome, texasburger.ingredients);
//const food_3 = texasburger.checkRecipe(kimmi.name, kimmi.foodAtHome, texasburger.ingredients);

//console.log(texasburger.kitchenTable, "are already on the kitchentable!");

//const guests = [fredo, mina, lotta, kimmi];
//console.log(guests);
//console.log(fredo);
//fredo.sayName();
//Database.save(guests);
const loadedGuests = Database.load();
const firstPerson = DinnerPartyGuest.create(loadedGuests[0]);
const secondPerson = DinnerPartyGuest.create(loadedGuests[1]);
//with create() you dont need to know anything about the inner properties of a class
firstPerson.sayName();
secondPerson.sayName();