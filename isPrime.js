/*
Write a function called isPrime which returns true if a number is a prime number. 

A prime number is a number greater than 1 which is only divisible by one and itself.
 The first few primes are 2, 3, 5, 7, 11, 13, and 17. Notice that 4 is not prime, since
 4 = 2 * 2. Similarly, 6 is not prime since 6 = 2 * 3. 

Examples:

isPrime(3) // true
isPrime(13) // true
isPrime(24) // false
isPrime(55) // false
isPrime(1299720) // false
isPrime(1299721) // true

*/


function isPrime(num) {
  for(var i = 2; i < Math.sqrt(num); i++){
    if(num % i === 0) return false
  }
  return num !== 1;
}
