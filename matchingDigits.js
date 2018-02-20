
// Write a function called matchingDigits which accepts two positive integers. 
// The function should find out if the two numbers have the same frequency of 
// digits, if so return true, otherwise return false. You can assume all inputs
//  will be positive integers.

// matchingDigits(141, 411) // true
// matchingDigits(34, 14) // false
// matchingDigits(3589578, 5879385) // true
// matchingDigits(22, 222) // false
// matchingDigits(8675309, 9035768) // true
// matchingDigits(8686867, 686868) // false

// Time complexity : O(N + M), where N and M are the total number of digits in each input.
function matchingDigits(n1,n2){
  //inputs 
      //n1, n2
  //outputs
      //true or false
  //data labeling
      //freqCount1,freqCount2 objects
      //arrays to deal with single chars
  //approach:
    // put n1 and n2 into freqCount1 and freqCount2 objects
    //iterate over freqCount1 to check whether freqCount2 has same keys/values
  let arr1 = n1.toString();
  let arr2 = n2.toString();
  let freqCount1 = {};
  let freqCount2 = {};
  for(let i = 0; i < arr1.length; i++) {
    freqCount1[arr1[i]] = freqCount1[arr1[i]]+1 || 0;
  }
  for(let j = 0; j < arr2.length; j++) {
    freqCount2[arr2[j]] = freqCount2[arr2[j]]+1 || 0;
  }
  for(let key in freqCount1) {
    if(freqCount1[key] !== freqCount2[key]) {return false}
  }
  return true;  
}
// Time complexity : O(N + M)



