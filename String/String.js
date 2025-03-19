
//length of the string
let nameOfCar ='harsha';
console.log(nameOfCar.length)

//spilt (which makes string into array)
let nameOfV="harsha is the one of the human"
console.log(nameOfV.split(' '));

//Trim (it is used to cut the blank space begining the words)
let nameOfH="    harsha   is   a   great  human   "
console.log(nameOfH.trim( ));

//charAt (it is used to show where the char is present)
let nameOfO="harsha";
console.log(nameOfO.charAt(0))

//toUpperCase (it is used to convert the data into upperCase)
let nameOfS="Harsha vardhan"
console.log(nameOfS.toUpperCase())

//lowercase (it is used convert the data into lowerCase)
let nameOfG="HARSHA VARDHAN"
console.log(nameOfG.toLowerCase())

//replace (it is used to replace the words)
let nameOfL="harshavardhan"
console.log(nameOfL.replace("harshavardhan","konduru"))//first we need to write the old value then camma new value

//set (which is used to delete the duplicates)
let numbers=[1,2,3,3,2,1,2,9,5,6];
let newNumbers=[...new Set(numbers)];//set is class in js so we need  use new
console.log(newNumbers)