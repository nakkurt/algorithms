// Write a function called doubleValuesMap which accepts an array and returns a new array with all the values in the array passed to the function doubled.

// Examples:

// doubleValuesMap([1,2,3]); // [2,4,6]
// doubleValuesMap([1,-2,-3]); // [2,-4,-6]

// Try to solve this using map.

function doubleValuesMap(arr){
  return arr.map(val => val*2)
}