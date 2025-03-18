let bookTicket=(destination)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(destination==="Paris"){
                resolve("Your ticket to Paris is booked!");
            }else{
                reject(`Sorry, we don't have tickets available for ${destination} destination.`);
            }
        },2000)
    })
}
bookTicket("Paris").then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})