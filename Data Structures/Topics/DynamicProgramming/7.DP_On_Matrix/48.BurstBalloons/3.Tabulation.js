var minCost = function (n, cuts) {
    let c = cuts.length;
    cuts.push(n);
    cuts.unshift(0)
    cuts.sort((a, b) => a - b);
    let dp = Array(c + 2).fill().map(() => Array(c + 2).fill(0))
    for (let i = c; i >= 1; i--) {
        for (let j = 1; j <= c; j++) {
            if (i > j) continue;
            let min = Infinity;

            for (let ind = i; ind <= j; ind++) {
                let lengthOfRod = cuts[j + 1] - cuts[i - 1];
                let cost = lengthOfRod + dp[i][ind - 1] + dp[ind + 1][j];
                min = Math.min(min, cost);
            }
            dp[i][j] = min;
        }
    }
    return dp[1][c];
};