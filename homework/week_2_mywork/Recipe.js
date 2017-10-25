console.log("Recipe.js works!");
module.exports = class Recipe {
    constructor(recipeName, ingredients) {
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.kitchenTable = [];
    }
    checkRecipe(foodAtHome, ingredients) {
        if (ingredients.includes(foodAtHome)) {
            console.log(foodAtHome);
            this.kitchenTable.push(foodAtHome);
            return this.kitchenTable;
        }

    }

}