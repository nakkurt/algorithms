
// Given a sorted array and a value x, the floor of x in the array is the 
// largest element in the array which is smaller than or equal to x. Write
//  a function called findFloor which takes an array and a value x, and 
//  returns the floor of x in the array. 

// findFloor([1,2,8,10,10,12,19], 5) // 2
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

// Time Complexity - O(log n)


function findFloor(arr, n){
  let left = 0;
  let right = arr.length - 1;
  let guess;
  let result;
  if((n === 0 && arr[0] > 0) || arr.length === 0) {return -1}
  while (left <= right) {
    guess = Math.floor((left + right) / 2);

    if (arr[guess] === n) {
      return guess;
    }
    else {
      if (arr[guess] < n) {
        result = arr[guess];
        left = guess + 1;
      }
      else {
        right = guess - 1;
      }
    }
  }
  return result;    
}


