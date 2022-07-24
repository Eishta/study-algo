var numDistinct = function (s, t) {
    let dp = Array(s.length).fill().map(() => Array(t.length).fill(-1))
    function solve(i, j) {
        if (j < 0) return 1;
        if (i < 0) return 0;
        if (dp[i][j] !== -1) return dp[i][j];
        if (s[i] === t[j]) {
            dp[i][j] = solve(i - 1, j - 1) + solve(i - 1, j);
        }
        else dp[i][j] = solve(i - 1, j)
        return dp[i][j];
    }
    return solve(s.length - 1, t.length - 1)
};


// TC = O(2^n + 2^m)
// SC = O(n + m) 