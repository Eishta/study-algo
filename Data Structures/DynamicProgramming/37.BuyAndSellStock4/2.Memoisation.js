var maxProfit = function (k, prices) {
    let dp = Array(prices.length).fill().map(() => Array(2).fill().map(() => Array(k + 1).fill(-1)))
    function solve(i, buy, cap) {
        if (i === prices.length || cap === 0) return 0;
        if (dp[i][buy][cap] !== -1) return dp[i][buy][cap]
        if (buy == 0) {
            dp[i][buy][cap] = Math.max(-prices[i] + solve(i + 1, 1, cap), solve(i + 1, 0, cap))
        }
        else {
            dp[i][buy][cap] = Math.max(prices[i] + solve(i + 1, 0, cap - 1), solve(i + 1, 1, cap))
        }
        return dp[i][buy][cap];
    }
    return solve(0, 0, k)
};


// TC = O(N * 2 * k)
// SC = O(N * 2 * k) + O(N)(aux space)