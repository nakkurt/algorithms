/*
Write a function called letterCounter which accepts a string and returns a function.
 When the inner function is invoked it should accept a parameter which is a letter, 
and the inner function should return the number of times that letter appears. This 
inner function should be case insensitive.

Examples: 

const counter = letterCounter('Amazing')
counter('a') // 2
counter('m') // 1

const counter2 = letterCounter('This Is Really Fun!')
counter2('i') // 2
counter2('t') // 1 

*/
//refactoring in progress
function letterCounter(str){
  return function counter(char){
    let count = 0;
    let lowerStr = str.toLowerCase()
    let lowerChar = char.toLowerCase()
    for(let i = 0; i < lowerStr.length; i++){
      if(lowerStr[i] === char) count++;
    }
    return count;
  }
}


//older version

// function letterCounter (str) {
//   return cb;

//   function cb(letter) {
//   let count = 0;
//   for(let i = 0; i<str.length; i++) {
//     str[i].toLowerCase() === letter.toLowerCase() ? count++ : false;
//   }
//   return count;
// }
// }



