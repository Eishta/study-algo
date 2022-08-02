var maxProfit = function (prices) {
    let ahead = Array(2).fill(0);
    let cur = Array(2).fill(0);
    let n = prices.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let buy = 0; buy < 2; buy++) {
            if (buy == 0) {
                let pickBuy = -prices[i] + ahead[1];
                let notPickBuy = 0 + ahead[0];
                cur[buy] = Math.max(pickBuy, notPickBuy);
            }
            else {
                let pickSell = prices[i] + ahead[0];
                let notPickSell = 0 + ahead[1];
                cur[buy] = Math.max(pickSell, notPickSell)
            }
        }
        ahead = [...cur];
    }
    return ahead[0]
};

// TC = O(n * 2)
// SC = O(1)