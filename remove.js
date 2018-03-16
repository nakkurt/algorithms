/*
Write a function called remove that accepts an array and a callback.
 This function should iterate through the array and remove all elements for which the
 callback returns a truthy value. Then, the function should return an array of removed
 elements.

The callback should accept up to three arguments: the current array value, the current
 array index, and the entire array.

let array = [1, 2, 3, 4];
let evens = remove(array, function(n) {
  return n % 2 == 0;
});

array; // [1, 3] 
evens; // [2, 4]

var strings = ["hello", "I SAID HELLO", "YO", "goodbye"];

var shouting = remove(strings, function(s) {
  return s.toUpperCase() === s;
});

strings; // ["hello", "goodbye"]
shouting; // ["I SAID HELLO", "YO"]

*/

function remove (arr,cb) {
  let result = [];    
  for(let i =0; i <arr.length; i++) {
    //remove arr[i] when cb = truthy
    //push arr[i] into result when cb === truthy
    if(cb(arr[i],i,arr)) {
      result = result.concat(arr.splice(i,1));
      i--;
    }
}
  return result;
}