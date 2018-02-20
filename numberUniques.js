
// Write a function called numberUniques which accepts an array of sorted 
// numbers and returns the number of unique values in the array.

// Time Complexity - O(n)
// Space Complexity - O(1)

// numberUniques([1,1,1,2,2,3,3,4,5]) // 5
// numberUniques([1,2,2,3,4]) // 4
// numberUniques([8,10,12,12,13,13,15]) // 5
// numberUniques([-2,-2,5,6,7]) // 4
// numberUniques([-3,-2,-1,0,0,1,2,3,6,10,11,22,22]) // 11

function numberUniques(arr){
  let count = 0;
  let i = 0;
  let previous = -Infinity;
  while(i < arr.length) {
    if(arr[i] > previous) {
      count++;
      previous = arr[i];
    }
    i++;
  }
  return count;
}
// Time Complexity - O(n)
// Space Complexity - O(1)