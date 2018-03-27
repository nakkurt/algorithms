/*
Write a function called rotateClockWise that rotates an NxN array of arrays clockwise,
 instead of counterclockwise. 
Examples: 

rotateClockwise([[1,2],[3,4]]) 
// [ [ 3, 1 ], [ 4, 2 ] ]

rotateClockwise([[1,2,3],[4,5,6],[7,8,9]]) 
// [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

rotateClockwise([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]) 

[ 
    [ 13, 9, 5, 1 ],   
    [ 14, 10, 6, 2 ],   
    [ 15, 11, 7, 3 ],   
    [ 16, 12, 8, 4 ] 
]

rotateClockwise([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20], [21,22,23,24,25]])
 
[  
   [ 21, 16, 11, 6, 1 ],   
   [ 22, 17, 12, 7, 2 ],  
   [ 23, 18, 13, 8, 3 ],   
   [ 24, 19, 14, 9, 4 ],   
   [ 25, 20, 15, 10, 5 ] 
]
*/

function rotateClockwise(arr) {
  let arrLength=arr.length;
  for (let i=0; i<arrLength/2; i++) {
    for (let j=i; j<arrLength-i-1; j++) {
      let tmp=arr[i][j];
      arr[i][j]=arr[arrLength-j-1][i];
      arr[arrLength-j-1][i]=arr[arrLength-i-1][arrLength-j-1];
      arr[arrLength-i-1][arrLength-j-1]=arr[j][arrLength-i-1];
      arr[j][arrLength-i-1]=tmp;
    }
  }
  return arr;
}
