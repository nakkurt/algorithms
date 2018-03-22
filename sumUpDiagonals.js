/*
Write a function called sumDiagonals which accepts an NxN array of arrays and sums
 the two main diagonals in the array: the one from the upper left to the lower right,
 and the one from the upper right to the lower left.

var arr1 = [
  [ 1, 2 ],
  [ 3, 4 ]
];
 
sumUpDiagonals(arr1); // 10

var arr2 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
];
 
sumUpDiagonals(arr2); // 30
 
var arr3 = [
  [ 4, 1, 0 ],
  [ -1, -1, 0],
  [ 0, 0, 9]
];

sumUpDiagonals(arr3); // 11

var arr4 = [
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
];
 
sumUpDiagonals(arr4); // 68
*/

function sumUpDiagonals(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i][i] + arr[i][arr.length-1-i];
    }
  return sum;
}