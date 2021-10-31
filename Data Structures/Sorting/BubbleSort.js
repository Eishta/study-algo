let bubbleSort = a => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }
    return a;
}
// bubbleSort([3,2,6,3,1,2])
// (6) [1, 2, 2, 3, 3, 6]
