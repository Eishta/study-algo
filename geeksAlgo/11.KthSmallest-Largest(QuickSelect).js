let kthLargest = (a, l, h, k) => {
    if (k > 0 && k <= a.length) {
        let pos = partition(a, l, h);
        let indexNeeded = a.length - k; // index = n-k
        if (pos == indexNeeded) {
            return a[pos];
        }
        else if (pos < indexNeeded) {
            return kthLargest(a, pos + 1, h, k);
        }
        else {
            return kthLargest(a, l, pos - 1, k);
        }

    }
    else return 'NotFound'
}
let kthSmallest = (a, l, h, k) => {
    if (k > 0 && k <= a.length) {
        let pos = partition(a, l, h);
        let indexNeeded = k - 1; // index = k-1
        if (pos == indexNeeded) {
            return a[pos];
        }
        else if (pos < indexNeeded) {
            return kthSmallest(a, pos + 1, h, k);
        }
        else {
            return kthSmallest(a, l, pos - 1, k);
        }

    }
    else return 'NotFound'
}
let partition = (A, l, r) => {
    let pivot = A[r], i = l, p = l;
    while (i < r) {
        if (A[i] <= pivot) {
            [A[i], A[p]] = [A[p], A[i]];
            p++;
        }
        i++;
    }
    [A[r], A[p]] = [A[p], A[r]];
    return p;
}