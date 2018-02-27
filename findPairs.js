
// Write a function called findPairs, that takes an array and value as input.  Your goal
//  is to find the number of the pairs in the array that sum to x.  You can assume the 
// values in the array are integers and that all the values are unique and sorted.

// Constraints: 

// Time Complexity - O(n)

// findPairs([1,2,3,4,5,6,7],8) // 3
// findPairs([1,2,3,4,5,6],6) // 2
// findPairs([],4) // 0


// add whatever parameters you deem necessary - good luck!
function findPairs(arr, val) {
  let result = 0;
  mySet = new Set(arr);
  //  
  for(i of mySet) {
    mySet.delete(i);
    if(mySet.has(val - i)) {
      mySet.delete(val - i);
      result++;
    }
  }  
  return result;
}
// Time Complexity - O(n)
// Space Complexity - O(n)