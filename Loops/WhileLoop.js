let count=9;
while(count<10){
    console.log(count);
    count++
}


  let i = 0;
  
  while (i < 5) {        
    console.log(i);
    i++;
  }

let numbers = [1, 2, 3, 4, 5, 6];
while (numbers.length > 0) {
    let item = numbers.pop(); 
    console.log('Processing:', item);
}

const minAge = 18;
let age;
while (!age || age < minAge) {
    age = prompt("Please enter your age (you must be 18 or older to proceed):");
}
console.log("Access granted.");

let countdown = 5;
while (countdown > 0) {
  console.log("Time left:", countdown);
  countdown--;
}
console.log("Blast off!");

