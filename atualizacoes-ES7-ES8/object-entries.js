const animals = { Camel: 3, Ilama: 2, Alpaca: 5 };

console.log(Object.entries(animals));

const animalsMap = new Map(Object.entries(animals));

console.log('Numero de registros:',animalsMap.size);

const animal = 'Camel'
console.log(`Existe o ${animal}:`,animalsMap.has(animal));
console.log(`Existe o registro ${animal}:`,animalsMap.get(animal));
