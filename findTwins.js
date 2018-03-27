// Write a function called findTwins, which accepts an array of integers and finds two of same numbers and returns the number that is repeated twice. The function should return null if there is not a number repeated twice.

// Examples:

// findTwins([4,1,6,1,5]) // 1
// findTwins([2,3,6,34,7,8,2]) // 2
// findTwins([3,6,9,2,4,3,1,0]) // 3
// findTwins([]) // null
// findTwins([3,1,4,2,5]) // null


function findTwins(arr) {
  let freqCount = arr.reduce((acc,val) => {acc[val] = acc[val]+1 || 1; return acc},{});
  for (let key in freqCount) {
    if(freqCount[key] > 1) return Number(key);  
  }
  return null;
}
