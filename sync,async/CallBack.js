function sum(a,b){
    console.log(a+b)
}
function call(a,b,sumFunction){
        sumFunction(a,b)
}
call(1,2,sum)
// in another way
function harsha(a,b){
    console.log(a+b)
}
harsha(1,3,(a,b)=>{
    console.log(a+b)
})
// here we can also perform the setTimeout in call back

function vardhan(){
    console.log(2+7)
}
setTimeout(vardhan,2000)//when ever we try to callback function we cannot use parenthathis like ().