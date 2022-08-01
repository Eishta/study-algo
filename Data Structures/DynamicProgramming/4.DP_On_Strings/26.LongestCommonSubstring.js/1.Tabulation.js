function longestCommonSubstring(a, b) {
    let n = a.length, m = b.length;
    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0))
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = Math.max(ans, dp[i][j]);
            }
            else {
                dp[i][j] = 0;
            }
        }
    }
    return dp[n][m]
}

// Time Complexity: O(N*M) - There are two nested loops

// Space Complexity: O(N*M) -  We are using an external array of size ‘N*M)’. Stack Space is eliminated.


