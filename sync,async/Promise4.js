let placeOrder=(item,balance)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(item==="laptop" && balance>=1000){
           resolve("Order placed successfully! Your Laptop will be delivered soon.")
            }else if(item==="laptop" && balance===800){
                reject("Insufficient balance. You need at least $1000 to buy a laptop.")
            }else{
              reject  (`Sorry, we don't sell that ${item}.`)
            }
        },3000)
    })
}
placeOrder("phone",500).then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})