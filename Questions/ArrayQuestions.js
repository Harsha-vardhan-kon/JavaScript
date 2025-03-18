//adding mango at end of the array
let fruits=["apple","banana"];
fruits.push("mango");
console.log(fruits)

//removing last element form the array
let veg=["carrot","panner","potato"];
veg.pop(0);
console.log(veg)

//removing element from begining 
let cricket=["ind","aus","eng"];
cricket.shift();
console.log(cricket)


//adding one element to the beginning
let adding=["hi","bye","go"];
adding.unshift("chalo","avo");
console.log(adding);

//adding to arrays using concat
let add=["welcome","goodMorning"]
let sub=["goodBye","goodNight"]
let both=add.concat(sub);
console.log(both);

//using slice which separate the arrays
let sli=["hi","bye","good","bad","night","morning"]
let ice=sli.slice(0,3);
console.log(ice);
console.log(sli)

//reverese the array
let nameOfCar=["audi","benz","bmw"];
nameOfCar.reverse();
console.log(nameOfCar)

