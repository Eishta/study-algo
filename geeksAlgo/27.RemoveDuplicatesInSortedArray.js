// Input :[1,2,2,3,3,3,4,4,4,5,6,6,7,7]
// Output:[1,2,3,4,5,6,7,2,3,3,4,4,6,7]-> Inplace
// Output:[1,2,3,4,5,6,7] -> new array
let removeDuplicatesSorted = (a)=>{
    let [i,j] = [1,0];
    while(i<a.length){
        if(a[i]!==a[i-1]){
            j++;
            a[j]=a[i];
        }
        i++;
    }
    return a.splice(0,j+1); //  or return j+1 to get the last index of the array that contains individual elements
}