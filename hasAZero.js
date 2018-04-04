// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false.

// Examples:

// hasAZero(3332123213101232321) // true
// hasAZero(1212121) // false

// Try to solve this using some or every.

const hasAZero = num => {
  return num.toString().split('').some(val => val === '0')
}