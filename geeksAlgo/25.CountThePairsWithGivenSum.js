// https://www.youtube.com/watch?v=8wrlCL6cvfQ


let countPairs = (a,sum)=>{
    let dict={};  // to store the occurnece of each element
    let count =0; // store the count of pairs

    // looop through the array
    for(let i=0;i<a.length;i++){
        let x= sum-a[i];  // the number to be added to a[i] to get 'sum'
        // check if x is present in dict
        // if yes , add the number of occurences of that number in count 
        if(dict[x] !== undefined){
            count+= dict[x]; 
        }
        dict[a[i]] = dict[a[i]]===undefined ?  1: dict[a[i]] +1;
    }
    return count;
}

countPairs([1,-3,3,1,2,1,4,-2], 2)
4