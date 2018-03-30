/* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
onlyEvenValues([1,3,5]) // []

Try to solve this using forEach.
*/
function onlyEvenValues(arr){
  let result = [];
  arr.forEach(val => {if(val % 2 === 0){result.push(val)}});
  return result;
}