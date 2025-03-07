//here we are checking wheather the number is even or odd by for loop and modulos operator and if ,else
for(let i=0;i<=10;i++){//intial i=0;condition is lessThenOr Equal to 10;increment
    
    if(i%2===0){//when the reminder is equal to 0 . 2/2=0 then it is even
        console.log(i+"it is even")
    }
    else{//if not then it is odd
        console.log(i+"it is odd")
    }
}
//printing only even numbers through for loop and if
for(j=2;j<=20;j++){
    if(j%2 === 0){
        console.log(j)
    }
}
//printing only values more then zero
for(let z=-20;z<=5;z++){
    if(z>0){
        console.log(z)
    }
}
//printing numbers in reverse order
for(let x=20;x>=0;x--){
    console.log(x)
}