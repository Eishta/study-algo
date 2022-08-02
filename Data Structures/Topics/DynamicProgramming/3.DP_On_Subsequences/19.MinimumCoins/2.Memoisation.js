function minCoins(coins, amount) {
    let dp = Array(coins.length - 1).fill().map(() => Array(amount + 1).fill(-1));
    function solve(ind, amount) {
        if (dp[ind][amount] !== -1) return dp[ind][amount];
        if (ind === 0) {
            if (amount % coins[0] === 0) return amount / coins[0];
            else return Number.MAX_SAFE_INTEGER
        }

        let notTake = 0 + solve(ind - 1, amount);
        let take = Number.MAX_SAFE_INTEGER;
        if (coins[ind] <= amount) {
            take = 1 + solve(ind, amount - coins[ind]);
        }
        dp[ind][amount] =
            Math.min(take, notTake);
        return dp[ind][amount];
    }
    let result = solve(coins.length - 1, amount)
    if (result === Number.MAX_SAFE_INTEGER) return -1;
    else return result
}

// Time Complexity: O(N*T)

// Reason: There are N*T states therefore at max ‘N*T’ new problems will be solved.

// Space Complexity: O(N*T) + O(N)

// Reason: We are using a recursion stack space(O(N)) and a 2D array ( O(N*T)).