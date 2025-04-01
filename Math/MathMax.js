// let maximum=(1,2,20,30);
// Math.max(maximum);
// console.log(maximum)

const { Sort } = require("@mui/icons-material");


// function max(a){
//     return Math.max(...a)
// }
// console.log(max([1,2,40]))

let  totalIncome=1000;
let totalExpense=500;
let totalSavings=totalIncome-totalExpense;
console.log(totalSavings);


let input = 'swaadesh';
let empty = '';
let seen = {};  

for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (seen[char]) {
        empty += char;  // Append if it's already seen
    }
    seen[char] = (seen[char] || 0) + 1;
}

console.log(empty);  

//Create a function that takes a string as input and returns the reverse of that string
function str(stri){
    let emptyString='';
    for(let i=stri.length-1;i>=0;i--){
        emptyString+=stri[i]
    }
    return emptyString
}
console.log(str("Harsha"))

//Create a function that returns the sum of all numbers in an array.
function addArray(add) {
    let sum=0;
    for(let i=0;i<add.length;i++){
        sum+=add[i];
    }
         return sum;
}
console.log(addArray([1,2,33,4,4]))

//Write a function that finds the largest number in an array.
function largestOfArray(arr) {
    let max = arr[0];     // Initialize max with the first element

    for (let i = 1; i < arr.length; i++) {   // Start loop from 1
        if (arr[i] > max) {
            max = arr[i];    // Update max if a larger number is found
        }
    }
    
    return max; // Return the maximum number
}

console.log(largestOfArray([1, 20, 30, 11])); // Output: 30





