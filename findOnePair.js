
// # Given an unsorted array of integers arr, and an integer s,
// # return an array with two values from arr that sum to s
// # arr length >=2 & <=1MM, -1MM<=s<=1MM
// # arr = [4,1,5,2,3,3], s = 6
// # return [3,3]

function findOnePair(arr,s){
  let arrObj = {};
  for(let i = 0; i < arr.length; i++) {
    let pairVal = s - arr[i];
    if(arrObj[s - arr[i]] !== undefined) {
      return [pairVal, arr[i]] 
    }
    arrObj[arr[i]] = arrObj[arr[i]]++ || 1;
  }
  return -1
}

console.log(findOnePair([4,1,5,8,3],6))  // [1,5]
console.log(findOnePair([4,1,5,2,3,3],19)) // -1
