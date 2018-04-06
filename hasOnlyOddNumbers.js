// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

// Examples:

// hasOnlyOddNumbers([1,3,5,7]) // true
// hasOnlyOddNumbers([1,2,3,5,7]) // false

// Try to solve this using some or every.

const hasOnlyOddNumbers = (arr) => arr.every(num => num % 2 > 0)