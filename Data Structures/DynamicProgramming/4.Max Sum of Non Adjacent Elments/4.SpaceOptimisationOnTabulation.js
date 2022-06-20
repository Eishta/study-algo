function MaxNonAdjacentSumTabOpt(n, arr) {
    let prev1 = arr[0], prev2 = 0;
    for (let i = 1; i < arr.length; i++) {
        let pick = i - 2 >= 0 ? arr[i] + prev2 : Number.MIN_SAFE_INTEGER;
        let notPick = 0 + prev1;
        dp[i] = Math.max(pick, notPick);
    }
    return dp[n]
}
// TC = O(n) = loop
// SP = O(1) 