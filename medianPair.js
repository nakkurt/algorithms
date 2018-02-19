
// Given a sorted array of integers and a target average, write a function 
// called medianPair which determines if there is a pair of values in the 
// array where the average of the pair equals the target average.
 
// Note: There may be more than one pair that matches the average target.

// medianPair([1,2,3], 2.5) // true
// medianPair([1,3,3,5,6,7,10,12,19], 8) // true
// medianPair([-1,0,3,4,5,6], -1) // false
// medianPair([1,2,3,4,5], 5) // false
// medianPair([8,9,10,11], 12) // false

// Time Complexity Constraint: O(n)
// Space Complexity Constraint: O(1) :

function medianPair(arr, n){
  //inputs
      // sorted array arr
      //number n
  //outputs
      //true or false 
  //to find b from avg and a: avg * 2 - a = b 
  //use two pointers to move thru arr and find a pair that matches avg * 2 - a = b 
  //while left < right loop
  // if (avg * 2 - left) < right then --right 
  // if (avg * 2 - left) > right then ++left
  // if (avg * 2 - left) === right then return true
  //if get to end  then return false
  let left = 0;
  let right = arr.length -1;
  while(left < right) {
    if(n * 2 - arr[left] < arr[right]) {right--}
    else if(n * 2 - arr[left] > arr[right]) {left++}
    else if(n * 2 - arr[left] === arr[right]) {return true}
  }
  return false;  
}
// Time Complexity Constraint: O(n)
// Space Complexity Constraint: O(1)