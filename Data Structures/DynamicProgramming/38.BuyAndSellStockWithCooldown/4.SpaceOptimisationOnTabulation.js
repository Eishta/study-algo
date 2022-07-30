var maxProfit = function (prices) {
    let ahead1 = Array(2).fill(0);
    let ahead2 = Array(2).fill(0);
    let cur = Array(2).fill(0);
    let n = prices.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let buy = 0; buy < 2; buy++) {
            if (buy == 0) {
                let pickBuy = -prices[i] + ahead1[1];
                let notPickBuy = 0 + ahead1[0];
                cur[buy] = Math.max(pickBuy, notPickBuy);
            }
            else {
                let pickSell = prices[i] + ahead2[0];
                let notPickSell = 0 + ahead1[1];
                cur[buy] = Math.max(pickSell, notPickSell)
            }
        }
        ahead2 = [...ahead1];
        ahead1 = [...cur];
    }
    return cur[0]
};
// TC = O(n * 2)
// SC = O(1)