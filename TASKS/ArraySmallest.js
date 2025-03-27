
let arr = [1, 23, 34, 0];

arr.sort((a, b) => a - b); 
console.log(arr)
let secondSmallest = arr[1]; 
let secondLargest = arr[2]; 
console.log(secondSmallest);
console.log(secondLargest);

// Find the Maximum Number in an Array

// Write a function that finds the largest number in an array.

// Example Input: [10, 25, 5, 100, 50]
function array(arr1){
    arr1.sort((a,b)=>a-b)
    return {min:arr1[0],max:arr1[arr1.length-1]}
}
console.log(array([10,20,3,2,40]))

function string(str){
    for(let i=0;i<str.length;i++){
        console.log(str[i])
    }
}
string("harsha")