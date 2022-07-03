function minCoins(coins, amount) {
    let dp = Array(coins.length + 1).fill().map(() => Array(amount + 1).fill(0));
    
    for (let i = 0; i <= amount; i++) {
        if (i % coins[0] === 0) dp[0][i] = i / coins[0];
        else dp[0][i] = Number.MAX_SAFE_INTEGER
    }

    for (let ind = 1; ind < coins.length; ind++) {
        for (let T = 0; T <= amount; T++) {
            let notTake = 0 + dp[ind - 1][T];
            let take = Number.MAX_SAFE_INTEGER;
            if (coins[ind] <= T) {
                take = 1 + dp[ind][T - coins[ind]];
            }

            dp[ind][T] = Math.min(take, notTake);
        }
    }
    if (dp[coins.length - 1][amount] === Number.MAX_SAFE_INTEGER) return -1;
    else return dp[coins.length - 1][amount]

}



// Time Complexity: O(N*T)

// Reason: There are two nested loops

// Space Complexity: O(N*T)

// Reason: We are using an external array of size ‘N*T’. Stack Space is eliminated.