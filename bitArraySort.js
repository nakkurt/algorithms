// Write a function called bitArraySort which accepts an array of integers containing only 0's and 1's returns the same array back in sorted order. You can assume that all inputs will be valid. 

// bitArraySort([0, 0, 0]) // [0, 0, 0]
// bitArraySort([1, 1, 1, 1]) // [1, 1, 1, 1]
// bitArraySort([0, 1, 1, 0, 1, 1, 0]) // [0, 0, 0, 1, 1, 1, 1]
// bitArraySort([1, 1, 1, 0, 1]) // [0, 1, 1, 1, 1]
// bitArraySort([1, 0, 0, 0, 0]) // [0, 0, 0, 0, 1]
// bitArraySort([1, 0, 1, 0, 0]) // [0, 0, 0, 1, 1]

// This should be done in place as well so be mindful of the following constraints below:

// Time Complexity - O(N)
// Space Complexity - O(1)

function bitArraySort(arr) {
  //sort arr in place -- zeroes first, then ones
  let left = 0;
  let right = arr.length-1;
  while(left < right) { 
    if(arr[left] === 1 && arr[right] === 0) {[arr[left],arr[right]] = [arr[right], arr[left]]}
    else if(arr[left] === 1 && arr[right] === 1) {
      right -= 1;     
    }
    else if(arr[left] === 0 && arr[right] === 0) {
      left += 1;
    } 
    else if(arr[left] === 0 && arr[right] === 1) {
      left += 1;
      right -= 1;     
    } 
  }
  return arr;  
}
// Time Complexity - O(N)
// Space Complexity - O(1)