var maxProfit = function (k, prices) {
    function solve(i, buy, cap) {
        if (i === prices.length || cap === 0) return 0;

        if (buy == 0) {
            return Math.max(-prices[i] + solve(i + 1, 1, cap), solve(i + 1, 0, cap))
        }
        else {
            return Math.max(prices[i] + solve(i + 1, 0, cap - 1), solve(i + 1, 1, cap))
        }
    }
    return solve(0, 0, k)
};

// TC = Exponential
// SC = O(n)