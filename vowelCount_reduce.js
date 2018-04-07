// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowels and the values as the number of times the vowel appears in the string. This function should be case insensitive, so a lowercase letter and uppercase letter should both count.

// Examples:

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you')
// // {i: 1, a: 4, e: 3, o: 3, u: 1};

// Try to solve this using reduce.

const vowelCount = (str) => {
  const strArr = str.toLowerCase().split('');
  const vowels = 'aeiou'
  return strArr.reduce((acc,val) => {
    if(vowels.includes(val)){
      acc[val] = ++acc[val] || 1;
    }
    return acc;
  },{})
}