//Reverse an Array
// 1.Write a program to reverse an array without using an extra array.
let surname=["harsha","vardhan","konduru"];
surname.reverse();
console.log(surname)//done
//Find Maximum and Minimum
//2.Write a function to find the maximum and minimum values in an array.
//Reverse an Array
//3.Write a function to reverse an array without using the reverse() method.


function reversedArray(arr){
    let revesed=[];
    for(let i=arr.length-1;i>=0;i--){
        revesed.push(arr[i])
    }
    return revesed;
}
console.log(reversedArray([1,2,3,4,5]))
//Find Maximum and Minimum
//2.Write a function to find the maximum and minimum values in an array.
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return { min, max };
}

console.log(findMinMax([2, 3, 1, 5, 4])); // Output: { min: 1, max: 5 }
