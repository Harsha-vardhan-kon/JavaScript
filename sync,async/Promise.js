const checkWeather=city=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(city==="newYork"){
             resolve("The weather in New York is sunny."
             )
        }else if(city==="london"){
            reject("Weather data not available for this city.")
        }
       },2000)
    })
}
 checkWeather("london").then((response)=>{
    console.log(response)
 })
 .catch((error)=>{
    console.log(error)
 }) //for checking the city temparature