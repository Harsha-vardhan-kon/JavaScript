// let a=Math.pow(8,2);
// console.log(a)

// Basic Power Calculation:
// Write a function that takes two numbers, base and exponent,
//  and returns the result of raising base to the power of exponent using Math.pow().

function cal(base,exponent){
    return Math.pow(base,exponent)
}
console.log(cal(10,2))

// Square and Cube Finder:
// Create a program that asks the user for a number and prints both its square and cube using Math.pow().

// Compare Two Exponents:
// Given four numbers a, b, x, y, write a function to determine whether Math.pow(a, b) is greater than Math.pow(x, y).
function expo(a,b,x,y){
     let power1=Math.pow(a,b);
     let power2=Math.pow(x,y);
     if(power1>power2){
        return `${a},${b} is greather:${power1}`
     }
     else if(power1<power2){
        return `${x},${y} is greather:${power2}`
     }
}
console.log(expo(10,2,11,2))

//Power of Two Check:
// Write a function that checks whether a given number is a power of 2 using Math.pow().

function chech(a,b){
    if(b==2){
        return `${b} is equal to 2`
    }
    else if(b>2){
        return `${b} is not equal to 2`
    }
}
console.log(chech(9,7))