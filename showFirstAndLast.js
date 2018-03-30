/* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:

showFirstAndLast(['elie','matt', 'michael'])
// ["ee", "mt", "ml"]
showFirstAndLast(['hi', 'goodbye', 'smile'])
// ['hi', 'ge', 'se']

Try to solve this using forEach.
*/

function showFirstAndLast(arr){
  let result = [];
  arr.forEach(val => {result.push(val[0]+val[val.length-1])});
  return result;
}