function minCoins(coins, amount) {
    let prev = Array(amount + 1).fill(0);

    let cur = Array(amount + 1).fill(0);
    for (let i = 0; i <= amount; i++) {
        if (i % coins[0] === 0) prev[i] = i / coins[0];
        else prev[i] = Number.MAX_SAFE_INTEGER
    }

    for (let ind = 1; ind < coins.length; ind++) {
        for (let T = 0; T <= amount; T++) {
            let notTake = 0 + prev[T];
            let take = Number.MAX_SAFE_INTEGER;
            if (coins[ind] <= T) {
                take = 1 + cur[T - coins[ind]];
            }
            cur[T] = Math.min(take, notTake);
        }
        prev = cur
    }
    if (prev[amount] === Number.MAX_SAFE_INTEGER) return -1;
    else return prev[amount]

}



// Time Complexity: O(N*T)

// Reason: There are two nested loops

// Space Complexity: O(N*T)

// Reason: We are using an external array of size ‘N*T’. Stack Space is eliminated.