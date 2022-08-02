var maxProfit = function (prices) {
    let dp = Array(prices.length + 2).fill().map(() => Array(3).fill(0));
    let n = prices.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let buy = 0; buy < 2; buy++) {
            if (buy == 0) {
                let pickBuy = -prices[i] + dp[i + 1][1];
                let notPickBuy = 0 + dp[i + 1][0];
                dp[i][buy] = Math.max(pickBuy, notPickBuy);
            }
            else {
                let pickSell = prices[i] + dp[i + 2][0];
                let notPickSell = 0 + dp[i + 1][1];
                dp[i][buy] = Math.max(pickSell, notPickSell)
            }
        }
    }
    return dp[0][0]
};

// TC = O(n * 2)
// SC = O(n * 2)