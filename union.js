/*
write a function called union which accepts a variable number of arguments,
 which are all arrays. The function returns a new array of unique values from
 all the parameters.

Examples:

union([2],[1, 2]); // [2, 1]
union([2],[1, 2], [3], [3, 4, 5]); // [2,1,3,4,5]
union([2],[1, 2], [6,8], [4,5,1,2], [2,7,6,9]); // [2,1,6,8,4,5,7,9]
*/

function union(...arr) {
  let flattenedArr = arr.reduce((acc,val) => acc.concat(val),[]);
  let uniqueVals = new Set(flattenedArr);
  return [...uniqueVals];
}
