function minCoins(coins, amount) {
    function solve(ind, amount) {
        if (ind === 0) {
            // coins[0] = 2 and amount = 8 return 4
            if (amount % coins[0] === 0) return amount / coins[0];
            // coins[0] = 3 and amount = 8 return MAX
            else return Number.MAX_SAFE_INTEGER
        }

        let notTake = 0 + solve(ind - 1, amount);
        let take = Number.MAX_SAFE_INTEGER;
        if (coins[ind] <= amount) {
            // same index can be taken multiple times
            // coins[ind] = 2 and amount = 8, 2 can be taken 4 times
            take = 1 + solve(ind, amount - coins[ind]);
        }

        return Math.min(take, notTake);
    }
    let result = solve(coins.length - 1, amount)
    if (result === Number.MAX_SAFE_INTEGER) return -1;
    else return result
}


// TC = O(2^N) = 2 choices => exponential and more than 2^n as each index can be taken multiple times
//  Sc = O(N) = recursive space => more than O(N) as each index can be taken multiple times