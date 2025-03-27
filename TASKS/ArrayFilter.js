// Problem 3  : Write a function that performs the following operations on an array:
// Filter the Array
// If the array contains even numbers, keep them.
// If the array contains only odd numbers, keep those greater than a specified value K.
// Transform the Array
// Multiply each remaining element by its index (0-based).
// Aggregate the Array
// Compute the sum of all elements in the transformed array.
// Reverse the Result//
// Reverse the final array before returning it

function filterArray(arr, k) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]); 
        } else if (arr[i] % 2 !== 0 && arr[i] >= k) {
            result.push(arr[i]); 
        }
    }
    return result;
}


console.log(filterArray([1, 2, 3, 4, 5, 10, 12], 3)); 

function filterArray(arr, K) {
    let even = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even = true;
            break;
        }
    }

    let result = [];

    
    if (even) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result.push(arr[i]);
            }
        }
    } 
    
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0 && arr[i] > K) {
                result.push(arr[i]);
            }
        }
    }

    return result;
}

const arr1 = [1,3,2,10,2];  
const arr2 = [1, 3, 5, 7];      
const K = 4;

console.log(filterArray(arr1, K)); 
console.log(filterArray(arr2, K)); 
