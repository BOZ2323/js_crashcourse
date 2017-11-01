console.log("Recipe.js works!");
module.exports = class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
        this.kitchenTable = [];
    }
    checkRecipe(name, foodAtHome, ingredients) {
        if (ingredients.includes(foodAtHome)) {
            this.kitchenTable.push(foodAtHome);
            return this.kitchenTable;
        } else {
            console.log(name, "brings wine!")
            this.kitchenTable.push("wine");
        }

    }

}