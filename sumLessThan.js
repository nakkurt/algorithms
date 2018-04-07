// Write a function called sumLessThan which accepts an array of numbers and a number.  The function should return the sum off all numbers less than the number.

// Examples:

// sumLessThan([1,2,3,4,5], 4) // 6
// sumLessThan([5,3,10,7], 100) // 25
// sumLessThan([2,2,2], 1) // 0

// Try to solve this using reduce.

const sumLessThan = (arr, num) => {
  return arr.reduce((acc,val) => {
    return val < num ? acc + val : acc  
  },0)
}