/*Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled.

Examples:

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

Solve using forEach.
*/

function doubleValues(arr){
  let result = [];
  arr.forEach(function(val){
    return result.push(val*2);
  })
  return result;
}