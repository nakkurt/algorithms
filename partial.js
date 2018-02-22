// Partial application refers to the process of taking a function
//  and returning a new function until all parameters to that 
// function have been passed. The function that is partially 
// applied, eventually resolves with a value once all parameters
//  have been passed to it.
// Here’s a basic example of how you’d use it:

// function add(a,b,c){
//   return a+b+c;
// }

// var partialAdd = partial(add);

// partialAdd(1)()()()(2,3) // 6

// Hint - you will need to use closure as well as the length property on functions 
// to solve this problem. The length property on functions allows you to see how 
// many parameters a function accepts.
// Here are the test cases:

// function addAlot(a,b,c,d,e,f,g,h){
//   return a+b+c+d+e+f+g+h;
// }


// var partialAdd = partial(addAlot);


// partialAdd()(1,2)(3,4)(5,6)()()()()(6)()()(10,11,12) // 37


// function subtractAlot(a,b,c,d,e){
//   return a-b-c-d-e;
// }


// var partialSub = partial(subtractAlot);


// partialSub(1,2,3)(4,5,6) // -13


function partial(fn) {
  return function f1(...f1innerArgs) {
    if (f1innerArgs.length >= fn.length) {
      return fn(...f1innerArgs);
    } else {
      return function f2(...f2innerArgs) {
        return f1(...f1innerArgs.concat(f2innerArgs)); 
      };
    }
  };
}