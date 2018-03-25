/*
Write a function called reverseVowels which accepts a string and reverses the vowels
 in the string. 

Examples:

reverseVowels('amazing') // "imazang"
reverseVowels('awesome') // "ewosema"
*/

//Time: O(N)   (single loop over input) 
//Space: O(N)
function reverseVowels(s) {
    if(!s)return 'Invalid input'
    let chars = s.split('');
    let low = 0;
    let high = s.length - 1;
    let vowels = "aeiouAEIOU";
    let temp;
    while(low < high) {
        while(low < high && !vowels.includes(chars[low])) low++;
        while(low < high && !vowels.includes(chars[high])) high--;
        temp = chars[high];
        chars[high] = chars[low];
        chars[low] = temp;
        low++;
        high--;
    }
    return chars.join('');
}


// refactored from this old version:
// Time: O(N)   (double loops over input) 
// Space: O(N)

// function reverseVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let strArr = str.split('');
//     let vowelArr = [];
//     for(let i = 0; i < strArr.length; i++){
//         if(vowels.includes(strArr[i])){
//             vowelArr.push(strArr[i]);
//             strArr[i] = null;
//         }
//     }
//     for (let j = 0; j < strArr.length; j++){
//         if(strArr[j] === null) {
//             strArr[j] = vowelArr.pop();
//         }
//     }
//     return strArr.join('');
// }