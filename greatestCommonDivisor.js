/*
Write a function called greatestCommonDivisor which accepts two whole numbers and 
returns the greatest common divisor between both numbers. The greatest common divisor of two 
whole numbers is the largest whole number that divides both numbers evenly.

Examples:

greatestCommonDivisor(3,20) // 1
greatestCommonDivisor(8,12) // 4
greatestCommonDivisor(20,100) // 20
greatestCommonDivisor(30,48) // 6
greatestCommonDivisor(66,242) // 22
greatestCommonDivisor(1324,2648) // 1324

*/

function greatestCommonDivisor(n1,n2) {
  
  //create nMax and nMin
  let nMax = Math.max(n1,n2);
  let nMin = Math.min(n1,n2);
  //loop until nMax % nMin is 0 (nMin becomes nMax each loop), then nMin is resulting greatest divisor
  let mod = nMin;
  while(mod !== 0) {
    nMin = mod;
    mod = nMax % nMin;
    nMax = nMin;
  }
  return nMin;
}
