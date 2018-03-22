/*
Write a function called sumBy which accepts an array of objects and a rule for 
summing up those objects to obtain a value. 

The rule can be provided in one of two ways. One way is to provide a callback function
 which is invoked for each element in array to generate the value to be summed. The 
callback is invoked with one argument: the current array element.

Another option for the rule is to pass in a string referencing a key. With this syntax,
 the value to be summed is the value corresponding to the key passed in.

Examples:

var objects = [{ 
  'n': 4, 
  'm': 8,
  's': 'first' 
}, { 
  'n': 2, 
  'm': 3,
  's': 'second' 
}, { 
  'n': 8,
  'm': 5,
  's': 'third'
}, { 
  'n': 6,
  'm': -2,
  's': 'fourth'
}]; 
sumBy(objects, function(obj) { return obj.n; }); // 20 
sumBy(objects, function(obj) { return obj.n * obj.m }); // 66

sumBy(objects, 'n'); // 20
sumBy(objects, 'm'); // 14
sumBy(objects, 's'); // '0firstsecondthirdfourth'
*/


function sumBy (arr,rule) {
  let sum = 0;
  for(let i = 0; i<arr.length; i++) {
    if(typeof(rule) === 'string') {
      sum += arr[i][rule];
    }
    if(typeof(rule) === 'function') {
      sum += rule(arr[i]);
    }
  }
  return sum;
}