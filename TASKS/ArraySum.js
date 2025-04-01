// 1. Find the Sum of All Elements in an Array
//        Write a function that takes an array of numbers and returns the sum of all elements.

function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}

console.log(sumOfArray([1,2,3]))

// 2. Count Even and Odd Numbers in an Array
//   Write a function that takes an array and counts how many even and odd numbers it contains.

function countEvenOddNumbers(arr){
      let  evenNumber=0;
      let oddNumber=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenNumber++
        }
        else{
            oddNumber++
        }
      }
      return {evenNumber,oddNumber}

}
console.log(countEvenOddNumbers([1,2,3,4]))

// 3. Count Number of Characters in a String
// Write a function to count the total number of characters in a string (excluding spaces).

function charOfString(str){
    sum=0;
    for(let i=0;i<str.length;i++){
        if(str[i]!==''){
            sum++;
        }
    }
    return sum;
}
console.log(charOfString("harsha is"))


//without function
function string(str){
    return str.length;
}
console.log(string("harsha is"))


let str='harsha is'
console.log(str.length)

let str1='harsha vardhan'
let reversed=''
for(let i=str1.length-1;i>=0;i--){
    reversed+=str1[i]
    
    
}

console.log(reversed)