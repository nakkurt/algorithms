/*
Write a function called binaryToDecimal which accepts a string of zeros and ones
 and returns the decimal value. Do not use parseInt!

Examples:

binaryToDecimal('1') // 1
binaryToDecimal('101') // 5
binaryToDecimal('1001') // 9
binaryToDecimal('10001') // 17
binaryToDecimal('10011101101') // 1261
binaryToDecimal('100010101010101010101') // 1135957

*/

function binaryToDecimal (str) {
  let sum = 0;
  for(let i = str.length-1, j = 0; i >= 0; i--, j++) {
    if(Number(str[i]) === 1) {sum += 2 ** j};
  }
  return sum;
}
//Time: O(N)
//Space: O(1)