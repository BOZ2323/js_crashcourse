const red = require("ansi-red");
console.log("Hello world");
const Person = require('./person')
const Database = require('./database')
const add = (num1, num2) => num1 + num2 + 2;
const output = add(3, 5);

console.log(output);
console.log(red("~the end~"));

const armagan = new Person("Armagan", 33);
const mihri = new Person("Mihri", 29);

const instructors = [armagan, mihri];
console.log(instructors);
console.log(armagan);
Database.save(instructors);
const loadedFile = Database.load();
console.log(loadedFile[0]);