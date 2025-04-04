const num1=[1,2,3,4];
const num2=5; 
const num3=num1.concat(num2)
console.log(num3)//here we are adding num2 at last


//what if we want add in the begining
const num4=[1,2,3,4];
const num5=[5,6,7];//what if we don't use[] then in 3rd line we need to use [num5].concat(num4) beacuse then only num5 can become array
const num6=num5.concat(num4)
console.log(num6)