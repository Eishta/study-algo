// Traditional linear search => no. of comaprisons => 2n+1
// for (let i=0;i<name;i++){      ===========> n+1
//     if(a[i]===x) return i;     ===========> n              ===> total = 2n+1
// }

/**** Reduce the no of comparisons */
let search = (arr, x)=>{
    let n = a.length;
    // if last element of array is equal to x then return found
    if(a[n-1]===x) return 'Found';               /**  comparison = 1 */


    // else take the backup of last element and replace it with x
    let backup = a[n-1];
    a[n-1]= x;

    for(let i = 0; ; i++){  /** comparison = 0  bcz comaparison statement is missing */
        // array will always contain the number x now as we have put x at the last element of array 
        // so this is the breaking condition of the loop
        if(a[i] ===x){
            a[n-1]= backup;
            if(i< n-1) return 'Found';
        }
        return 'Not Found';
    }
}