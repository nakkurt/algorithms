// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at that key. If there is no value at that key, no value should be placed in the output array.

// Try to solve this using reduce.

const extractValue = (arr, key) => {
  return arr.reduce((acc,val) => {
    return val[key] !== undefined ? (acc.push(val[key]),acc) : acc
  },[])
}