const animals = { Camel: 3, Ilama: 2, Alpaca: 5 };

console.log(Object.values(animals));

const totalAnimals = Object.values(animals).reduce((acc, animal) => acc + animal)
console.log('Total Animals:', totalAnimals);