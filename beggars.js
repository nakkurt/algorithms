// Write a function called beggars that accepts an array and a number. The function should return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Examples:

// beggars([1,2,3,4,5],1) // [15]
// beggars([1,2,3,4,5],2) // [9,6]
// beggars([1,2,3,4,5],3) // [5,7,3]
// beggars([1,2,3,4,5],6) // [1,2,3,4,5,0]
// beggars([1,2,3,4,5],0) // []

function beggars(arr, int) {
    let sumArr = [];
    let sum1 = 0;
    
    for(let j = 1; j <= int; j++) {
        sumArr[j-1] = 0;
        for(let i = j-1; i < arr.length;) {
            sumArr[j-1] += arr[i];
            i = i + int; 
        }

}
    return sumArr;
}