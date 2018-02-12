// Given two strings, write a function to determine if the second string is an
//  anagram of the first.  An anagram is a word, phrase, or name formed by 
//  rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1,str2){
//put all chars into objects and then compare objects
//if lengths don't equal then false
  if(str1.length !== str2.length) {return false}
  let str1Chars = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0, ' ': 0};
  let str2Chars = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0, ' ': 0};
  for(let i = 0; i < str1.length; i++) {
    str1Chars[str1[i]]++;
  } 
  for(let j = 0; j < str2.length; j++) {
    str2Chars[str2[j]]++;
  } 
  for(let key in str1Chars) {
    if((str1Chars[key] - str2Chars[key]) < 0) {return false}
  }
  return true;
}
// Time Complexity - O(n)
// Space Complexity - O(1)