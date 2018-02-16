/*
Write a function called snail which Given an n x n array, returns the 
array elements arranged from outermost elements to the middle element,
 traveling clockwise.



snail([[1,2,3],[4,5,6],[7,8,9]] ) // [1,2,3,6,9,8,7,4,5]

snail([[1,2,3],[8,9,4],  [7,6,5]]) // [1,2,3,4,5,6,7,8,9]

snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]) 
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
*/

//1. first step shift and concat first row/array to result (first array is destroyed/disappears)
//2. second step push and (pop arr[i]) last value in remaining arrays. [this step involves a loop]
//3.  then take the last array and reverse it then concat it to result
//4. loop from end (at this step i have two arraya remaining when started with 4) and shift then (push first val into result)

//base case: arr.length === 1

//different input - destroying arr so it's smaller'
function snail(arr){
  if(arr.length === 1) {return arr[0]};
  //1. first step shift and concat first row/array to result (first array is destroyed/disappears)
  var result = [];
  result = result.concat(arr.shift())
  //2. second step push and (pop arr[i]) last value in remaining arrays. [involves a loop]
  for(var i = 0; i < arr.length; i++) {
    result.push(arr[i].pop())
  }
  result = result.concat(arr.pop().reverse());
  for(var j = (arr.length-1); j >= 0; j--) {
    result.push(arr[j].shift());
  }
  result = result.concat(snail(arr));
  return result;
}