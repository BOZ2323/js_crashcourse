console.log("Recipe.js works!");
module.exports = class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
        this.kitchenTable = [];
    }
    sayName() {
            console.log(this.name);
        }
        //a static function is not bahaviour, it is a method on the class itself.
    static create(obj) {
        return new Recipe(obj.name, obj.ingredients);

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