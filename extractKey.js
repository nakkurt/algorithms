// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the values for that key in each object.

// Examples:

// extractKey([
//   {name: 'Elie'},
//   {name: 'Michael'},
//   {name: 'Matt'}
// ], 'name'); 
// // ['Elie', 'Michael', 'Matt']

// extractKey([
//   {eyeColor: 'blue', age: 4},
//   {eyeColor: 'brown', age: 8},
//   {eyeColor: 'green', age: 1},
//   {eyeColor: 'brown', age: 6}
// ], 'age');
// // [4, 8, 1, 6]

// Try to solve this using map.

function extractKey(arr, key){
  return arr.map(obj => obj[key])
}