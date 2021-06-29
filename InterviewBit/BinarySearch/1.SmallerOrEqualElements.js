let solution =(A, B)=> {
    let low = 0;
    let high = A.length - 1;
    while (low <= high) {
        let mid = (high + low) >> 1;
        // console.log(mid, low, high)
        //if(A[mid] == B) return mid;
        if (A[mid] > B) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    //console.log('return ', low)
    return low;
}

// MY solution- Quick select find the last occurrnence of element equal to B or less than B
let lastOccurence = (A, start, end, B, n) => {
    if (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if ((A[mid] <= B && mid === n - 1) || (A[mid] <= B && A[mid + 1] > B)) {
            return mid;
        }
        else if (A[mid] <= B) {
            return lastOccurence(A, mid + 1, end, B, n)
        }
        else return lastOccurence(A, start, mid - 1, B, n)
    }
}
let solve = (A, B) => {
    let l = lastOccurence(A, 0, A.length - 1, B, A.length) + 1
    return l ? l : 0;
}


