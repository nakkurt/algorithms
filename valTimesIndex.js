// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by its index in the array.

// Examples:

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]
// valTimesIndex([4,2,8,0,1]) // [0, 2, 16, 0, 4]
// valTimesIndex([]) // []

// Try to solve this using map.

function valTimesIndex(arr){
  return arr.map((val,idx) => val * idx)
}