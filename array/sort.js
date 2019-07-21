const logger = require("../logger");
/**
 * Array.protopype.sort
 * */

const fruits = ["apple", "orange", "banana", "straywberry", "kiwi"];
fruits.sort();

logger.info(fruits);

/**
 * Customer sort
 * */

const people = [
  { name: "Marcelo", age: 38 },
  { name: "Marcos", age: 22 },
  { name: "Roberto", age: 21 },
  { name: "Vini", age: 19 }
];

function orderByName(currentPerson, nextPerson) {
  if (currentPerson.name > nextPerson.name) {
    return 1;
  }
  if (currentPerson.name < nextPerson.name) {
    return -1;
  }
  return 0;
}

people.sort(orderByName);
logger.info(people);

function orderByAge(currentPerson, nextPerson) {
  if (currentPerson.age > nextPerson.age) {
    return 1;
  }
  if (currentPerson.age < nextPerson.age) {
    return -1;
  }
  return 0;
}

people.sort(orderByAge);
logger.info(people);
