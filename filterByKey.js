// Write a function called filterByKey which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

// Examples:

// filterByKey([
//   {num1: 3, num2: 5},
//   {num2: 4, num3: 1, num5: 1},
//   {num3: 3}
// ], 'num3');
// // [
// //   {num2: 4, num3: 1, num5: 1},
// //   {num3: 3}
// // ]


const filterByKey = (arr,key) => {
  return arr.filter(val => val[key] !== undefined)
}