/*
Write a function called takeRight which accepts an array and an optional value and
 creates a copy of the array starting from the end for the value number of elements.
 If a value is not passed the function should return an array with the last element.
 If the second parameter is greater than the length of the array, return a copy of the
 entire array. 

takeRight([1, 2, 3], 2); // [2, 3] 
takeRight([1, 2, 3], 5); // [1, 2, 3] 
takeRight([1, 2, 3], 0); // []

*/

function takeRight (arr, val) {
  let result = [];
  let start = val;
  if(val>arr.length) {
    start = arr.length
  } 
  if(val === undefined) {start = 1}
  result = arr.slice((arr.length-start),arr.length);
  return result;
}