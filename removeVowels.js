// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

// Examples:

// removeVowels('hELLO') // 'hll'
// removeVowels('ZZZZZZ') // 'zzzzzz'

// Try to solve this using filter.

const removeVowels = (str) => {
  let strArr = str.toLowerCase().split('');
  let vowels = 'aeiou'
  let vowelsRemoved = strArr.filter(char => !vowels.includes(char));
  return vowelsRemoved.join('')
}