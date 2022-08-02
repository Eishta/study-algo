// multiply([1,2,3])=> 6

function multiply(arr, n) {
    if (n == 0) return a[n];
    else return a[n] * multiply(arr, n - 1);
}

multiply([1,2,3,4],3)
24