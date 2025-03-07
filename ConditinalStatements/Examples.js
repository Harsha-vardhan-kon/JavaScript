let a=20;
let b=30;
if(a<b){
    console.log("The largest number is"+b)
}
else if(a>b){
    console.log("The largest number is"+a)
}
else{
    console.log("thek are equal")
}//leargest of the 2 NUmbers


let j=3;
let k=-7;
let l=2;
if (j > 0 && k > 0 && l > 0) {
    alert("The sign is +");
  } else if (j < 0 && k < 0 && l < 0) {
    console.log("The sign is -");
  } else if (j > 0 && k < 0 && l < 0) {
    console.log("The sign is +");
  } else if (j < 0 && k > 0 && l < 0) {
    console.log("The sign is +");
  } else {
    console.log("The sign is -");
  }//Checking the -sign symbol

  let x = 0;
  let y = -1;
  let z = 4;
  
  if (x > y && x > z) {
      if (y > z) {
          alert(x + ", " + y + ", " + z);
      } else {
          alert(x + ", " + z + ", " + y);
      }
  } else if (y > x && y > z) {
      if (x > z) {
          alert(y + ", " + x + ", " + z);
      } else {
          alert(y + ", " + z + ", " + x);
      }
  } else {
      if (x > y) {
          alert(z + ", " + x + ", " + y);
      } else {
          alert(z + ", " + y + ", " + x);
      }
  }//alert pop on the webpage
  
  