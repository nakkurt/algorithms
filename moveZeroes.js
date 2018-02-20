// Write a function called moreZeroes which accepts an array 
// and moves all 0's to the end of it while maintaining the
//  relative order of the non-zero elements. The function should return the array.

// moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
// moveZeroes([1,3,10,2]) // [1,3,10,2]
// moveZeroes([4,1,2,0,0,1,2,1,0]) // [4,1,2,1,2,1,0,0,0]
// moveZeroes([6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0]
// moveZeroes([0,6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0,0]
// moveZeroes([12,2,0,0,2,1]) // [12,2,2,1,0,0]

// Time Complexity - O(n)
// Space Complexity - O(1)

function moveZeroes(nums) {
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
  return nums;
}

/*
old solution:
function moveZeroes(arr){
  //inputs
      //array
  //outputs
      //same array but edited (zeroes moved to the end, other order unchanged)
  //data labeling
      //left  (pointer)
      //right (pointer)
  //approach
      //use two pinters to move thru arr and swap arr[left] with arr[right]
      // whenever arr[left] === 0 and arr[right] !== 0
  if(arr.length === 0) {return arr}      
  let left = 0;
  let right = 1;
  while(right < arr.length && left < arr.length) {
    if(arr[left] === 0 && arr[right] !== 0) {
      [arr[left],arr[right]] = [arr[right],arr[left]];
      left++;
      right++;
    }
    else if (arr[left] !== 0) {
      left++;
      right++
    }
    else if (arr[right] === 0) {right++}
  }
  return arr;
}
*/