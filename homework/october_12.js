class DinnerPartyGuest {
    constructor(name, foodAtHome) {
        this.name = name;
        this.foodAtHome = foodAtHome;
    }
}

class Recipe {
    constructor(recipeName, ingredients) {
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.kitchenTable = [];
    }


    checkRecipe(foodAtHome, ingredients) {
        for (var i = 0; i < ingredients.length; i++) {
            if (i == foodAtHome) {
                this.kitchenTable.push(i);
                return this.kitchenTable;
            }
        }

    }
}

const texasburger = new Recipe("texasburger", ["burgerbuns", "onions", "tomatoes", "beefpatties", "lettuce", "bacon"])
const fredo = new DinnerPartyGuest("Fredo", "tomatoes");

console.log(texasburger.checkRecipe(fredo.foodAtHome, texasburger.ingredients));

console.log(fredo);
console.log(texasburger);