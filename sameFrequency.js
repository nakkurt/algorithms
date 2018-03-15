// Write a function called sameFrequency. Given two positive integers,
//   find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false

function sameFrequency(n1,n2){
  const [n1String, n2String] = [[...n1 + ''],[...n2 + '']]
  if(n1String.length !== n2String.length) {return false}
  const n1Freq = n1String.reduce((acc,val) => {
    acc[val] = acc[val] + 1 || 1;
    return acc
  },{});
  const n2Freq = n2String.reduce((acc,val) => {
    acc[val] = acc[val] + 1 || 1;
    return acc
  },{});  
  for(let key in n1Freq) {
    if(n1Freq[key] !== n2Freq[key]) {return false}
  }
  return true
}
// Time: O(N)