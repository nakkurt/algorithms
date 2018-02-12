// Given a non-empty integer array, find the minimum number of moves required
//  to make all array elements equal, where a move is incrementing a selected
//   element by 1 or decrementing a selected element by 1.

// Examples:

// findMinMoves([1,2,3]) // 2 
// findMinMoves([7,1]) // 6
// findMinMoves([3,3,1]) // 2
// findMinMoves([11,2,5]) // 9
// findMinMoves([-2,11,5]) // 13
// findMinMoves([5,2,1,7,-2,4,10]) // 21

// Time Complexity - O(n log n)
// Space Complexity - O(1)

function findMinMoves(arr){
  //sort array
  let result = 0;
  arr = arr.sort((a,b) => {return a-b});
  // take the middle index element and make other elements equal that by incremeneting
  let midVal = arr[Math.ceil((arr.length-1) /2)];
  for(let i = 0; i < arr.length; i++) {
    result += Math.abs(midVal - arr[i]);
  }
  return result
}
// Time Complexity - O(n log n)
// Space Complexity - O(1)
