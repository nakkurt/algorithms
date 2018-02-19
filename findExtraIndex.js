
// Write a function called findExtraIndex which takes in two sorted arrays that are almost
//  identical. The only difference is that the first array has one element that the second 
//  array does not. Your function should return the index of the additional element in the first array.

// findExtraIndex([1, 2, 3], [1, 3]) // 1
// findExtraIndex([2, 4, 6, 8, 9, 10, 12] , [2, 4, 6, 8, 10, 12]) //  4
// findExtraIndex([3, 5, 7, 9, 11, 13] , [3, 5, 7, 11, 13]) //  3

// Time Complexity - O(log N)

// function findExtraIndex(arr1, arr2){
//   //inputs: 
//     //2 sorted arrs arr1 & arr2
//   //output:
//     //result: the index of the elem in arr1 that is extra
// 	var left = 0;
// 	var right = arr1.length - 1;
// 	var guess;

// 	while (left <= right) {
// 	  guess = Math.floor((left + right) / 2);

// 		if (arr1[guess] === arr2[guess]) {
// 		  left = guess + 1;
// 		}
// 		else {
// 		  if (arr1[guess] < arr2[guess] && arr1[guess-1] === arr2[guess-1]) {
// 	      return guess;
// 		  }
// 		  else {
// 	      right = guess - 1;
// 		  }
// 		}
// 	}

// 	return left;
// }
// // Time Complexity - O(log N)
// // Space complexity: O(1)


//refactor: 

function findExtraIndex(arr1, arr2){
  let index = 0;
  let left = 0;
  let right = arr1.length-1
  while(left <= right){
    let mid = Math.floor((left+right) / 2)
    if(arr2[mid] === arr1[mid]){
      left = mid+1
    } else {
      index = mid;
      right = mid -1
    }
  }
  return index;
}
