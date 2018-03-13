function pivotIndex (arr){
  let leftSum = 0;
  let rightSum = arr.reduce((a,b) => a+b);
  for(let i = 0; i < arr.length; i++){
    rightSum = rightSum - arr[i];
    if(leftSum === rightSum) {return i}
    leftSum += arr[i];
  }
  return -1;
}
// Time Complexity: O(N) 
// Space Complexity: O(1) 