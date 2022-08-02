var maxProfit = function (prices) {
    let dp = Array(prices.length).fill().map(() => Array(2).fill(-1));

    function solve(i, buy) {
        if (i >= prices.length) return 0;
        if (dp[i][buy] !== -1) return dp[i][buy];
        if (buy === 0) {
            // you can buy
            let pickBuy = -prices[i] + solve(i + 1, 1);
            let notPickBuy = 0 + solve(i + 1, 0);
            dp[i][buy] = Math.max(pickBuy, notPickBuy);
        }
        else {
            // you can sell
            let pickSell = prices[i] + solve(i + 2, 0);
            let notPickSell = 0 + solve(i + 1, 1);
            dp[i][buy] = Math.max(pickSell, notPickSell)
        }
        return dp[i][buy];
    }
    return solve(0, 0);
};

// TC = O(n * 2)
// SC = O(n * 2) + O(n)