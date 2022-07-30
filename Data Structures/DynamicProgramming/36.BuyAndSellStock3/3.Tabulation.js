var maxProfit = function(prices) {
    let dp = Array(prices.length+1).fill().map(()=> Array(2).fill().map(()=> Array(3).fill(0)));
    for(let i = prices.length -1;i>=0 ; i--){
        for(let buy = 0;buy<=1;buy++){
            for(let cap = 1;cap<=2;cap++){
                if(buy == 0){
                    dp[i][buy][cap] =  Math.max(-prices[i] + dp[i+1][1][cap], dp[i+1][0][cap])
                }
                else {
                    dp[i][buy][cap]=  Math.max(prices[i] + dp[i+1][0][cap-1], dp[i+1][1][cap])
                }
            }
        }
    }
    return dp[0][0][2]
};

// TC = O(n * 2 * 3)
// SC = O(n * 2 * 3)