// var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var removebleArray = [3, 4, 5];

// var newNumberArray = numberArray.filter(m => {
//   return !removebleArray.includes(m);
// });

var numberArray = [1, 2, null, 4, 5, 6, 7, 8, 9];
var removebleArray = [null];

var newNumberArray = numberArray.filter(m => {
  return !removebleArray.includes(m);
});



console.log("new Array, [3,4,5] removed", newNumberArray);
