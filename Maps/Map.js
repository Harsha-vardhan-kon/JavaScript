const obj1=new Map([
    ["name","harsha"]//["key","value"]
])
obj1.set("name2","vardhan")//set is used to set the value to map 
obj1.delete("name")//delete is used to delete the required key
obj1.clear();//clear iis used to clear everything
console.log(obj1.get("name"));//get is used to get the requried key
console.log(obj1.get("name2"));
//when we console after the clear() method and we console then it shows the undifined beacuse the key value which we calling is not there
