function asyncFunction(a,b){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
           console.log(a+b);
         reject(`the value of a+b is ${a+b}`)
         },2000)
    })
}
console.log(`fetching the answer for a+b wait 2s`)
let p1=asyncFunction(2,3);
p1.catch((res)=>{
    console.log(res)
})
//what if we have two apis


