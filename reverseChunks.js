
// Reverse Chunks
// Given an array of integers along with an integer k, reverse the first k elemnts,
// the second k elements, and so on all the way to the end of the array. k is greater than 0

// Ex 1: 
// input: [1,2,3,4,5,6,7,8,9], 3
// output: [3,2,1,6,5,4,9,8,7]

// Ex 2: 
// input: [6,5,4,3,2,1], 2
// output: [5,6,3,4,1,2]

// Ex 3: 
// input: [1,2,3,4,5,6,7,8,9], 1
// output: [1,2,3,4,5,6,7,8,9]

// If ever there are not enough integers in the array for the next k elements,
// simply reverse the ones you have available

// Ex 4: 
// input: [1,2,3,4,5,6,7,8,9,10], 4
// output: [4,3,2,1,8,7,6,5,10,9]

function reverseChunks(arr,k) {
  let result = arr.slice();
  let left = 0;
  let right = left + k - 1;
  if(right >= arr.length){right = arr.length-1}
  let tracker = 0;
  while(tracker <= result.length+right) {
    while(left < right) {
      [result[left],result[right]] = [result[right],result[left]]
      ++left;
      --right;
    }
    tracker += k; 
    left = tracker;
    right = left + k - 1;
    if(right > result.length-1) {right = result.length-1}
  }
  return result;    
}