var maxProfit = function (k, prices) {
    let cur = Array(2).fill().map(() => Array(k + 1).fill(0));
    let ahead = Array(2).fill().map(() => Array(k + 1).fill(0));
    for (let i = prices.length - 1; i >= 0; i--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let cap = 1; cap <= k; cap++) {
                if (buy == 0) {
                    cur[buy][cap] = Math.max(-prices[i] + ahead[1][cap], ahead[0][cap])
                }
                else {
                    cur[buy][cap] = Math.max(prices[i] + ahead[0][cap - 1], ahead[1][cap])
                }
            }
        }
        ahead = [...cur]
    }
    return ahead[0][k]
};

// TC = O(n * 2 * k)
// SC = O(2 * k) => O(k)