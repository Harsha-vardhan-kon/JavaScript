function call(){
    console.log("hello")
}
setTimeout(call,2000)//in timeout we use milliseconds 

//in another way

setTimeout(()=>{
    console.log("harsha")
},3000)


//Another example for the setTimeout
console.log("harsha is goat");
console.log("harsha is goat");
console.log("harsha is goat");
setTimeout(()=>{
    console.log("harsha is human")
},3000)
console.log("bhai")//we can see in output that setTimeout makes to wait untill the all outputcomes