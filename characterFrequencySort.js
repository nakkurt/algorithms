
// Write a function called characterFrequencySort which accepts a string 
// and sorts it in decreasing order based on the frequency of characters and
//  returns a new string. 

// // The most frequent character should appear first with its frequency, 
// followed by the second most frequent character with its frequency, and 
// so on. You can assume that all of the letters passed to the function 
// will be lowercased and each letter will appear a different number of times.

// characterFrequencySort("ttttrreee") // "tttteeerr"
// characterFrequencySort("cacac") // "cccaa"
// characterFrequencySort("eeeeffalll") // "eeeelllffa"
// characterFrequencySort("abbcccdddd") // "ddddcccbba"
// characterFrequencySort("xyzxyyzzzxyyyyzzzzz") // "zzzzzzzzzyyyyyyyxxx"

// Time Complexity - O(n log n)

// Bonus Time Complexity - O(n)


//needs refactoring:
function characterFrequencySort(str){
  //sort string based on number times a char appears in orig string 
    //most frequent char to be first, etc
    //only lowercase chars and each letter to appear diff nr times
  // loop over string, store freq of chars in object
  let obj = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  for(let i = 0; i<str.length; i++) {
    obj[str[i]]++;
  }
  let result = '';
  //remove keys from obj which have 0 val 
  //loop over object vals and find max val, then put that char at end of 
  //result val number of times
//while loop which repeats until all chars done (work in progress)
  while(result.length < str.length) {
    let currentMax = -Infinity;
    let currentKey = '';
    for(let key in obj){
      if(obj[key] === 0) {delete obj[key]}
      if(obj[key] > currentMax) {
        currentMax = obj[key]
        currentKey = key;
      }
    }
    //ie. multiply this val nr times: str = str.concat(obj[keyhere])  
    //THEN change that key val to 0: obj["previous max"] = 0

    let j = 0;
    while(j<currentMax){
      result = result.concat(currentKey)
      j++;
    }
    obj[currentKey] = 0;
  }

  return result;
}