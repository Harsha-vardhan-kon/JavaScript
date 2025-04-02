function asyncFunction1(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`the value of a+b ${a+b}`)

            resolve(`succes ${a+b}`)
        },4000)
       
    })
}
function asyncFunction2(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`the value of a+b ${a-b}`)

            resolve(`succes ${a-b}`)
        },4000)
       
    })
}

// console.log("fetching data for a+b")
// let function1=asyncFunction1(20,10);
// function1.then((res)=>{                                   //this is not a chain
//     console.log(res)
//     console.log("fetching data for a-b")
// let function2=asyncFunction2(20,10);
// function2.then((res)=>{
//     console.log(res)
// })
// })
//another way to do this from line 22 to 31
console.log("fetching data for a+b")
asyncFunction1(10,20).then((res)=>{           //this line shows you the chain
console.log("fetching data for a-b")
asyncFunction2(10,20).then((res)=>{})
});