function MaxNonAdjacentSumTab(n, arr) {
    let dp = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let pick = i - 2 >= 0 ? arr[i] + dp[i - 2] : Number.MIN_SAFE_INTEGER;
        let notPick = 0 + dp[i - 1];
        dp[i] = Math.max(pick, notPick);
    }
    return dp[n]
}
// TC = O(n) = loop
// SP = O(n) = array