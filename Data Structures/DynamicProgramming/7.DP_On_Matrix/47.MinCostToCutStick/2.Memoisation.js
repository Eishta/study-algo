var minCost = function (n, cuts) {
    let c = cuts.length;
    cuts.push(n);
    cuts.unshift(0)
    cuts.sort((a, b) => a - b);
    let dp = Array(c + 1).fill().map(() => Array(c + 1).fill(-1))
    function solve(i, j) {
        if (i > j) return 0;
        if (dp[i][j] !== -1) return dp[i][j]
        let min = Infinity;
        for (let ind = i; ind <= j; ind++) {
            let length = cuts[j + 1] - cuts[i - 1];
            let cost = length + solve(i, ind - 1) + solve(ind + 1, j);
            min = Math.min(min, cost);
        }
        dp[i][j] = min;
        return min;
    }
    return solve(1, c);
};

// TC = O(N*N) * N => approx O(N^3)
// SC = O(N^2) + O(N) aux