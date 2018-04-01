// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added to each object. 

// Solve this using forEach.

function addKeyAndValue(arr,key,val){
  arr.forEach(obj => {
    obj[key] = val;
  })
  return arr;
}