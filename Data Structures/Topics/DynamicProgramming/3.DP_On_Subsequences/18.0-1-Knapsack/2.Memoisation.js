function knapSack(W, wt, val, n) {
    let dp = Array(n).fill().map(() => Array(W + 1).fill(-1));
    /**
     * 
     * @param {*} ind -> current index 
     * @param {*} w -> weight left in bag to fill
     * @returns 
     */
    function solve(ind, w) {
        if (dp[ind][w] !== -1) return dp[ind][w];
        if (ind === 0) {
            if (wt[ind] <= w) return val[0];
            else return 0;
        }
        let take = -Infinity;
        if (wt[ind] <= w) take = val[ind] + solve(ind - 1, w - wt[ind])
        let notTake = 0 + solve(ind - 1, w);
        dp[ind][w] = Math.max(take, notTake);
        return dp[ind][w];
    }

    return solve(n - 1, W)
}


// TC = O(n * W) = at max combos to be solved
//  Sc = O(n * W) +  O(N) = recursive space
