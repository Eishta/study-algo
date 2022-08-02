var numDistinct = function (s, t) {
    let dp = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0))
    for (let i = 0; i < s.length + 1; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else dp[i][j] = dp[i - 1][j]
        }
    }
    return dp[s.length][t.length]

};

// Time Complexity: O(N*M) - There are two nested loops

// Space Complexity: O(N*M) -  We are using an external array of size ‘N*M)’. Stack Space is eliminated.