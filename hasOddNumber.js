// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number. Otherwise, it returns false.

// Examples:

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

// Try to solve this using some or every.

const hasOddNumber = arr => arr.some(val => val % 2 > 0)

// using every:
// const hasOddNumber = arr => !arr.every(val => (val % 2 === 0))
  

