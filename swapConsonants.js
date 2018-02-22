// // Write a function called swapConsonants which swaps the consonants in a string and returns the 
// new string swapped. The vowels in the string will always remain in the same position in the returned
//  string.

// swapConsonants('last') // 'tasl'
// swapConsonants('elixir') // 'erixil'
// swapConsonants('username') // 'umenrase'
// swapConsonants('rithmschool') // 'lihcsmhtoor'
// swapConsonants('thecatinthehat') // 'thehatintcehat'
// swapConsonants('codingismyfavorite') // 'torivfiymsganodice'

// Time Complexity - O(n)

function swapConsonants(str){
    if(str.length === 0) return str;
    
    var chars = str.split('');
    var left = 0;
    var right = str.length - 1;
    var vowels = 'aeiouAEIOU';
    var temp;
    while(left < right) {
        while(left < right && vowels.includes(chars[left])) left++;
        while(left < right && vowels.includes(chars[right])) right--;
        temp = chars[right];
        chars[right] = chars[left];
        chars[left] = temp;
        left++;
        right--;
    }
    
    return chars.join('');
}
// Time Complexity - O(n)