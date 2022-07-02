function knapSack(W, wt, val, n) {
    let dp = Array(n).fill().map(() => Array(W + 1).fill(0));

    for (let w = wt[0]; w <= W; w++) {
        dp[0][w] = val[0];
    }

    for (let i = 1; i < n; i++) {
        for (let w = 0; w <= W; w++) {
            let notTake = 0 + dp[i - 1][w];
            let take = -Infinity;
            if (wt[i] <= w) {
                take = val[i] + dp[i - 1][w - wt[i]]
            }
            dp[i][w] = Math.max(take, notTake)
        }
    }
    return dp[n - 1][W]
}


// TC = O(n * W) => traversal
//  Sc = O(n * W) = DP
