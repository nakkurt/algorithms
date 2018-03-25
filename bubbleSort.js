// Implement a function called bubbleSort.  Given an array, bubbleSort will sort the values in the array.  The function takes 2 parameters: an array and an optional comparator function.

// function bubbleSort(arr, comparator) {
//   if (typeof comparator !== 'function') {
//     // provide a default
//   }
// }

// The comparator function is a callback that will take two values from the array to be compared.  The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.


function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a,b) => a-b;
  }
  let first= 0;
  let last = 1;
  let tracker = 0;
  while(tracker < arr.length -1) {
    first= 0;
    last = 1;
    while(first <=arr.length-2) {
      if(first === arr.length -1) {
        first= 0;
        last = 1;
      }
      if(comparator(arr[first],arr[last]) > 0) {
        [arr[first], arr[last]] = [arr[last], arr[first]];
      }
      first++;
      last++;
    }
    tracker++;
  }
  return arr;
}
