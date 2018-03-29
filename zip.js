/*
Write a function called zip which accepts an arbitrary number of arrays, and 
creates an array of grouped elements, the first of which contains the first 
elements of the input arrays, the second of which contains the second elements
 of the input arrays, and so on.

zip([1,2],[3,4]) // [[1, 3], [2, 4]

zip(['a', 'b'], [1, 2], [true, false]); 
// [['a', 1, true], ['b', 2, false]]

zip(['w','x','y','z']) // [['w'], ['x'], ['y'], ['z']]

zip(['a', 'b','c'], [1, 2], [true, false])
//[['a', 1, true], ['b', 2, false], ['c', undefined, undefined]]
*/

function zip() {
    let result = [];
    let args = arguments;
    let maxLen = 0;
    let numArrs, zipLength, temp; 

    for(let i = 0; i < args.length; i++) {
        maxLen = Math.max(maxLen,args[i].length);
    }
    numArrs = maxLen;
    zipLength = args.length;
    for(let i = 0; i < numArrs; i++){
        temp = [];
        for(let j = 0; j < zipLength; j++){
            temp.push(args[j][i]);
        }
        result.push(temp);
    }
    return result;
}
