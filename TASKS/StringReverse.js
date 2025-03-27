//Problem 1 : Reverse a string :Write a program that takes a string as input and returns the reversed version of that                     string. The function should maintain the case of the characters and preserve any spaces or special                           characters.
//Example:
//Input: "hello"
//Output: "olleh"


function str1(str) {
     let reversed = "";
     for (let i = str.length - 1; i >= 0; i--) {
         reversed += str[i]; 
     }
     return reversed;
 }
 

 console.log(str1("harsha is")); 

 


  
  









 