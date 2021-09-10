// Find the largest sum of K consecutive numbers in an array of size n
// Method 1. Brute Force

let maxSum = (arr, k) => {
    let max = -Infinity;
    for (let i = 0; i < arr.length - k + 1; i++) {
        let curSum = 0
        for (let j = 0; j < k; j++) {
            curSum += arr[i + j];
        }
        max = Math.max(max, curSum)
    }
    return max;
}

// Method 2 Sliding window
let maxSum = (arr, k) => {
    let n = arr.length, i = 0;
    let wSum = arr.slice(0, k).reduce((a, c) => a + c, 0);
    let max = wSum;
    while (n - k > i) {
        wSum = wSum - arr[i] + arr[i + k];
        max = Math.max(max, wSum)
        i++;
    }
    return max;
}