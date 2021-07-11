// if Sorted array
let findMissing = (a,n)=>{
    let total=1;
    for(let i=2;i<n+2;i++){
        total+=i;
        total-=a[i-2];
    }
    return total;
}

// if not sorted
 //TODO