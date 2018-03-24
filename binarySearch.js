function binarySearch(list, val) {
    let left = 0;
    let right = list.length - 1;
    let guess;
    while (left <= right) {
        guess = Math.floor((left + right) / 2);
        if (list[guess] === val) {
            return guess;
        }
        else {
            if (list[guess] < val) {
                left = guess + 1;
            }
            else {
                right = guess - 1;
            }
        }
    };
    return -1;
}