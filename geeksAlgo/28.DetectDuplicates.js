let detectDuplicates = arr =>{
    let dict={};
    let curEle = 0;
    for(let i=0;i<arr.length;i++){
        curEle = arr[i];
         dict[curEle] && dict[curEle]===1 && ((dict[curEle]++),(console.log(curEle)));
        !dict[curEle] && (dict[curEle]=1);
    }
}
// detectDuplicates([1,2,2,3,3,3])
// 2
// 3
// --------------------------------------------------------------------------------------
let detectDuplicates = arr =>{
    let dict={};
    let curEle = 0;
    for(let i=0;i<arr.length;i++){
        curEle = arr[i];
         dict[curEle] && dict[curEle]++; 
        !dict[curEle] && (dict[curEle]=1);
    }
    for(let [key,value] of Object.entries(dict)){
        value>1 && console.log(key)
    }
}

//detectDuplicates([1,2,2,3,3,3])
// 2
// 3