// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

// Solve this using every.

const hasCertainKey = (arr, key) => {
  return arr.every(obj => key in obj) 
}