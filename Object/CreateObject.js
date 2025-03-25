//we can create objects in 3 ways
//1.object literal ,2.using new keyword,3.using constructor
//1.object literal
 const arr=({
       name:'harsha',
       age:22,
       address:"andhraPardesh"
})
arr.name='vardhan'
console.log(arr.name)
console.log(arr.age)




const har=new Object({  //using new keyword
    name:'babu',
    age:30
})
har.age=40;
console.log(har.name) 
console.log(har.age)


//keys,values,
const valu=({
    id:1,
    name:'harsha'
})
console.log(Object.keys(valu))//accesing keys shows only id,name in array format
console.log(Object.values(valu))//accessing values shoes only id value (1) id name(harsha) in array format
console.log(Object.entries(valu))//accssing entries 
    
