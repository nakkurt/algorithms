// PART I 

// Write a function called averagePair. Given a sorted array of integers
//  and a target average, determine if there is a pair of values in the 
//  array where the average of the pair equals the target average. There
//   may be more than one pair that matches the average target.

// Your solution MUST have the following complexities:

// Time: O(N)
// Space: O(1)

// Sample Input:

// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

//Using two pointers
function averagePair(arr, avg){
  if(arr.length === 0) {return false}
  let [left, right] = [0, arr.length-1];
  while(left !== right){
    if(avg - arr[left] + avg === arr[right]) {return true}
    avg - arr[left] + avg < arr[right] ? right-- : left++;
  } 
  return false;
}
// Time: O(N)
// Space: O(1)



//caching values in object is less efficient on time complexity:

// function averagePair(arr, avg){
//   let cacheObj = {};
//   for(let i = 0; i < arr.length; i++) {
//     if(cacheObj[arr[i]] !== undefined) {return true}
//     cacheObj[(avg * 2 - arr[i])] = 1;
//   }
//   return false;
// }
// Time: O(N)
// Space: O(N)
