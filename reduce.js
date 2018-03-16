/*
Write a function called reduce which accepts an array, a callback function, 
and an initial value. Reduce should iterate over the input array and accumulate
 a value based on the return value of the callback.

The callback should accept as arguments the current accumulated value, the current
 array value, and the current array index. After each iteration, the return value 
 from the callback becomes the new accumulator value. When the iteration is finished,
  reduce should return the final accumulated value.

If value is provided, it is the first value in the accumulator. If no value is provided,
 the first element in the array should be the initial value, and process of accumulation 
 using the callback should start from the second element in the array.
 */

 function reduce (arr,cb,val) {
  let acc = 0;
  let j = 0;
  //if val provided then acc = value and for loop starts from 0
    //else acc = arr[0] and for loop starts from 1
  val !== undefined ? acc = val : (acc = arr[0], j = 1);
  debugger
  for(let i = j; i < arr.length; i++) {
    acc = cb(acc,arr[i],i);
   
  }
  return acc;
}
