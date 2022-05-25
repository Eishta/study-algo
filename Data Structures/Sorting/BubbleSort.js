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



// comparison happens in pairs hence the name bubble sort
// the bigger elements start taking their position first and we skip the loop over them by lessening the end condition for j => j< n- i -1