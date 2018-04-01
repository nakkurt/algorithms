// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive, so both lowercase vowels and uppercase vowels should count.

// Examples:

// vowelCount('Alfie'); // {a:1,e:1,i:1}
// vowelCount('Michael'); // {a:1,e:1,i:1}
// vowelCount('Pratt'); // {a:1}
// vowelCount('hmmm'); // {}
// vowelCount('I Am awesome and so are you');
// // {i: 1, a: 4, e: 3, o: 3, u: 1}

// Try to solve this using forEach.

function vowelCount(str){
  const strArr = str.toLowerCase().split('');
  const vowelFreq = {};
  const vowels = new Set(['a','e','i','o','u'])
  strArr.forEach(letter => {
    if(vowels.has(letter)){
      vowelFreq[letter] = vowelFreq[letter] + 1 || 1
    }
  })
  return vowelFreq;
}