/*
Write a function called twoArrayDifference which accepts two arrays and returns
 an array of all of the values in the first that are not the second array. The 
returned array should preserve the order of elements from the first array. 

Examples:

twoArrayDifference([1,2,1], [2]); // [1, 1]
twoArrayDifference([1,2,1], [1]); // [2]
twoArrayDifference([2,3,4,5], [2,5]); // [3, 4]
twoArrayDifference([2,3,4,5], [6,7,8]); // [2,3,4,5]
twoArrayDifference([2,3,4,5,6,7,8,9,10], [2,3,4,5,6]); // []

*/



// twoArrayDifference1 is faster than twoArrayDifference2 when input arrays have many elements (hundreds of elems)
// However, when input arrays are short (dozens of elements) then twoArrayDifference2 is actually faster 
function twoArrayDifference1(arr1, arr2){
  let result = [];
  //create arr2Freq counter object
  let arr2Freq = arr2.reduce((acc,val) => {
    acc[val] = acc[val] + 1 || 1;
    return  acc;
  },{});
  //use arr2Freq to filter vals into result
  for(let i = 0; i<arr1.length; i++) {
    if(arr2Freq[arr1[i]] === undefined) {
      result.push(arr1[i]);  
    }
  }
  return result;
}

// this solution is faster for smaller arrays
function twoArrayDifference2(arr1, arr2){
  return arr1.filter(function(val){
    return arr2.indexOf(val) === -1;
  })
}