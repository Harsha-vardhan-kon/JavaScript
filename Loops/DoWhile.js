 x = 0
 i = 0

 do {
   x = x + i;
   console.log(x)
   i++;
 } while (i < 5);

let z = 1;
do {
    console.log(z);
    z++;
} while (z <= 5);

let number;

do {
  number = parseInt(prompt("Enter a positive number: "), 10);
} while (number <= 0);

console.log("You entered:", number);

