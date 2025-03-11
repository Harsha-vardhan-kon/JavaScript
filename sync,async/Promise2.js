const orderFood=(foodItem)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(foodItem==="pizza"){
            resolve("Your Pizza is ready!")
           }else if(foodItem==="burger"){
            reject("Sorry, we don't serve that item.")
           }
        },3000)
    })
}
orderFood("pizza").then((reponse)=>{
    console.log(reponse)
})
.catch((error)=>{
    console.log(error)
})