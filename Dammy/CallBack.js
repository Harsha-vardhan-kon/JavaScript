function getElementId(dataId,nextId){
    setTimeout(()=>{
        if(nextId){
            nextId()
        }
        console.log(dataId)
        
    },2000)
}
getElementId(1,()=>{
    getElementId(2,()=>{
        getElementId(3)
     
        })
      
    })
