function Hi() {
    console.log("Hello, welcome!");
  }
  
Hi();


function Sum(){
    let a=20;
    let b=30;
    console.log(a+b)
}
  Sum();

let x = myNumber(4, 3);

function myNumber(a, b) {

 return a*b
}


function condition(){
    let a=30;
    let b=5;
    if(a<b){
    console.log("its crt")
  }
  else{
    console.log("its wrong")
  }
  }
  condition();

  function loop(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
  }
  loop();


  function loop1(){
    let a=0;
    while(a<=10);
    console.log(a)
    a++
  }
  loop1();


function greet(){
  return 'hi'
}
let str=greet();
console.log(str);

//function expression
let add=function(num1,num2){
  return num1+num2
}
let result=add(10,20)
console.log(result);

