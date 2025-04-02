const fruits=([
    {age:20,nam:"harsha"},
    {age:22,nam:"vardhan"},
    {age:23,nam:"konduru"},
    {age:20,nam:"pandu"}

])
const result=Object.groupBy(fruits,({age})=>
      age>=21?"ok":"underAge"

)
console.log(result)


const names=([
    {age:20,name:"harsha"},
    {age:21,name:"vardhan"},
    {age:22,name:"konduru"},
    {age:23,name:"panddu"}
])
function callBack({age}){
    return age>=21?"ok":"notOk"
}
const result2=Map.groupBy(names,callBack);
console.log(result2)

