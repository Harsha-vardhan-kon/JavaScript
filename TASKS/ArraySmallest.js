

let arr = [1, 23, 34, 0];

arr.sort((a, b) => a - b); 
console.log(arr)
let secondSmallest = arr[1]; 
let secondLargest = arr[arr.length - 2]; 
console.log(secondSmallest);
console.log(secondLargest);

