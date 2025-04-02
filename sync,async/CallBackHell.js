 function getDataId(dataid){
     setTimeout(()=>{
       //  console.log(dataid)
     },2000)
 }
 getDataId(1)
 getDataId(2)
getDataId(3)//see here after waiting for 2s we are getting all the data at a time.
//what if we want delay for 2s for every dataid then there is an solution

function getElementId(dataid,getNextId){
    setTimeout(()=>{
       
           if(getNextId){
            getNextId();
            console.log("data" , dataid)
           }
    },2000)
}
getElementId(1,()=>{//these lines are called callBackHell where is like nested callBack
    getElementId(2,()=>{
        getElementId(3)
        })
    })
