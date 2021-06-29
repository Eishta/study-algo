let cyclicRotate = (a, k) => {
    let n = a.length;
    // nothing to rotate
    if (n < 1) return a;
    // [1,2,3,4], k=5 => k= 1 output => [4,1,2,3]
    else if (k > n) k = k - n;
    else if (k < 0) k = Math.abs(k);
    // if n=k , [1,2,3,4]  k= 4 => [1,2,3,4]
    if (n === k) return a;
    reverseArray(a, 0, n - k - 1);
    reverseArray(a, n - k, n - 1);
    reverseArray(a, 0, n - 1);
    return a;
}

let reverseArray = (a, start, end) => {
    let [i, j] = [start, end];
    while (i < j) {
        [a[i], a[j]] = [a[j], a[i]]
        i++;
        j--;
    }
}