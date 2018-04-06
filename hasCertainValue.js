// Write a function called hasCertainValue which accepts an array of objects, a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise, it should return false.

// Try to solve this using some or every

const hasCertainValue = (arr,key,expectedVal) => {
  return arr.every(obj => obj[key] === expectedVal)
}