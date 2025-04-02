 let a=20;
 if(a>19){
   if(a>40){//nesting means passing condition over condition (loop over loop) using loop in side another loop like this
     console.log("banana")
   }
   else{
     console.log("orange")
   }
 }
 else{
     console.log("apple")
 }//here the output is orange

 //now lets tryy the loop nesting
 for(let i=0;i<5;i++){
     let str=''
     for(let j=0;j<5;j++){
         str+=j
        
     }
     console.log(str)
 }


