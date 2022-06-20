function frogJumpsTab(n, arr) {
    let cur, prev1 = 0, prev2 = 0;

    for (let i = 1; i < n; i++) {
        let jump1 = prev1 + Math.abs(arr[i - 1], arr[i]);
        let jump2 = i > 1 ? prev2 + Math.abs(arr[i - 2] - arr[i]) : Number.MAX_VALUE;
        cur = Math.min(jump1, jump2);
        prev2 = prev1;
        prev1 = cur;
    }

    return prev1;
}
// TC = O(n) = loop
// SP = O(1)