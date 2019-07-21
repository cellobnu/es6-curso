const people = [
  { name: "Marcelo", age: 38 },
  { name: "Marcos", age: 22 },
  { name: "Roberto", age: 21 },
  { name: "Vini", age: 19 }
];

function customerMap(list, calback) {
  const all = [];
  const max = list.length;
  let index = 0;

  for (; index < max; index++) {
    const currentItem = list[index];
    const transformedItem = calback(currentItem);

    all.push(transformedItem);
  }
  return all;
}

const allAge2 = customerMap(people, function(person) {
  return person.age;
});

console.table(allAge2);
