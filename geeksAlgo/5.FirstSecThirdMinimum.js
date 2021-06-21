let getMinimuns = (A) => {
    let first = Number.MAX_SAFE_INTEGER, second = Number.MAX_SAFE_INTEGER, third = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<A.length;i++){
        if(A[i]<first){
            third=second;
            second= first;
            first= A[i];
        }
        else if(A[i] < second && A[i] !== first){
            third = second;
            second = A[i];

        }
        else if(A[i]< third && A[i]!== first && A[i]!==second){
            third =A[i];
        }
    }
    console.log(first, second, third)
}

getMinimuns([4, 9, 1, 32, 12,1,1,1])
// 1 4 9