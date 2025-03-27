// 1. Find the Sum of All Elements in an Array
//        Write a function that takes an array of numbers and returns the sum of all elements.

function arr1(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
console.log(arr1([1,2,3,4,5]))

// 2. Count Even and Odd Numbers in an Array
//   Write a function that takes an array and counts how many even and odd numbers it contains.

function numbers(num){
    let evenNumbers=0;
    let oddNumbers=0;
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            evenNumbers++
        }
          else if(num[i]%2 !=0){
            oddNumbers++
        }
    }
    return {even :evenNumbers,odd:oddNumbers}
}
console.log(numbers([1,2,3,9,4,6]))

// 3. Count Number of Characters in a String
//       Write a function to count the total number of characters in a string (excluding spaces).

function stringCount(str){
    return str.length;
}
console.log(stringCount("harsha vardhan"))


//without function
let str=("harsha vardhan");
console.log(str.length)




