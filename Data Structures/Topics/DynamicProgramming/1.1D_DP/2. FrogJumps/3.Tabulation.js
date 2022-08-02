function frogJumpsTab(n, arr) {
    let dp = [0];

    for (let i = 1; i < n; i++) {
        let jump1 = dp[i - 1] + Math.abs(arr[i - 1], arr[i]);
        let jump2 = i > 1 ? dp[i - 2] + Math.abs(arr[i - 2] - arr[i]) : Number.MAX_VALUE;
        dp[i] = Math.min(jump1, jump2)
    }

    return dp[n - 1];
}
// TC = O(n) = loop
// SP = O(n) = array