const logger = require("../logger");

// /** Array.protopype.map */

const people = [
  { name: "Marcelo", age: 38 },
  { name: "Marcos", age: 22 },
  { name: "Roberto", age: 21 },
  { name: "Vini", age: 19 }
];

// [38, 22, 21, 19]
const Allpeople = people.map(function(person) {
  return person.age;
});

console.table(Allpeople);

const names = ["marcos", "marcelo", "Roberto", "Vini"];

const allPeople = names.map(function(person) {
  return { name: person, age: 0, company: "FW7" };
});

console.table(allPeople);
