function sumArr(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArr([2,4]));

function stringCount(str){
    return str.length;
}
console.log(stringCount("harsa    "))

function numberCount(arra){
    let evenCount=0;
    let oddCount=0;
    for(let i=0;i<arra.length;i++){
        if(arra[i]%2===0){
            evenCount++
        }
        else if(arra[i]%2 !==0){
             oddCount++
        }
        
    }
    return {even :evenCount,odd :oddCount}
}
console.log(numberCount([2,3,4]));


