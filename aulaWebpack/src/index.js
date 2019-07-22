import * as R from "ramda";

import sum, { sub, multiplicacao, div as Divisao, PI } from "./utils";

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = R.union(arr1, arr2);

console.log(arr3);

console.log("Module Sum", sum(3, 2));
console.log("Module Sub", sub(3, 2));
console.log("Module Mul", multiplicacao(3, 2));
console.log("Module Div", Divisao(4, 2));
console.log("Variavel PI", PI);


