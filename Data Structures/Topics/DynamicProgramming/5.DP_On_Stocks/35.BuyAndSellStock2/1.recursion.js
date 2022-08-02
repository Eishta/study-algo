var maxProfit = function(prices) {
    
    function solve(i, buy){
        if(i===prices.length)return 0;
        if(buy === 1){
            // you can buy
            let pickBuy = -prices[i] + solve(i+1, 0);
            let notPickBuy = 0 + solve(i+1, 1);
            return Math.max(pickBuy, notPickBuy);
        }
        else {
            // you can sell
            let pickSell = prices[i] + solve(i+1, 1);
            let notPickSell = 0 + solve(i+1, 0);
            return Math.max(pickSell, notPickSell)
        }
    }
   return solve(0, 1);
};

// TC = Exponential
// SC = O(n)