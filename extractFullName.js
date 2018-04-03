// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

// Examples:

// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Michael', last:"Hueter"}
// ]); // ['Elie Schoppik', 'Matt Lane', 'Michael Hueter']

// extractFullName([
//   {first: "Amalie", middle: "Emmy", last: "Noether"},
//   {first: "Mary", middle: "Lucy", last: "Cartwright"},
// ]); // ["Amalie Noether", "Mary Cartwright"]

// Try to solve this using map.

function extractFullName(arr){
  return arr.map(obj => {
    return obj['first'] + ' ' + obj['last']
  })
}