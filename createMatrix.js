/*
Writ a function called createMatrix which takes in two whole numbers, n and m, and
 creates a two-dimensional array with n columns and m rows. All of the values inside
 of your array should be 0.

Examples:

createMatrix(2,2) // [[0,0],[0,0]]
createMatrix(3,2) // [[0,0,0],[0,0,0]]
createMatrix(3,4) // [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
createMatrix(5,4) // [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
*/


function createMatrix(n,m){
    var rows = m;
    var columns = n;
    var resultArr = []
    for(var i=0; i<rows; i++){
        resultArr.push(new Array(columns).fill(0));
    }
    return resultArr;
}