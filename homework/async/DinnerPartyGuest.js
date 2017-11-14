console.log("DinnerPartyGuest.js works!")
module.exports = class DinnerPartyGuest {
    constructor(name, foodAtHome) {
        this.name = name;
        this.foodAtHome = foodAtHome;
    }
    sayName() {
            console.log(this.name);
        }
        //a static function is not bahaviour, it is a method on the class itself.
    static create(obj) {
        return new DinnerPartyGuest(obj.name, obj.age);

    }
}