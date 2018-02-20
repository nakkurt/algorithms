
// Write a function called sameNumberOfEvens which accepts two numbers and 
// returns true if they contain the same number of even digits. 

// Time Complexity - O(n)
// Space Complexity - O(n)

// sameNumberOfEvens(2426, 8248) // true
// sameNumberOfEvens(21, 13) // false
// sameNumberOfEvens(21, 0) // true
// sameNumberOfEvens(1231231, 1112323) // true

function sameNumberOfEvens(n1,n2){
  //inputs: two numbers (ints?)
  //outputs: true or false
  //data storage -- might get away with simple n1Evens and n2Evens counts
  arr1 = [...n1.toString()];
  arr2 = [...n2.toString()];
  n1Evens = 0;
  n2Evens = 0;
  for(let i = 0; i<arr1.length; i++) {
    if(arr1[i] % 2 === 0) {n1Evens++}
  }
  for(let j = 0; j<arr2.length; j++) {
  if(arr2[j] % 2 === 0) {n2Evens++}
  }
  return n1Evens === n2Evens;
}