function lcs(a, b) {
    let n = a.length, m = b.length;
    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0))

    for (let i = 0; i < n; i++) {
        dp[i][0] = 0
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 0
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i] === b[j]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[n][m];
}


function longestPalindromicSubsequence(str) {
    let reverse = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return lcs(str, reverse);
}

// Time Complexity: O(N*M) - There are two nested loops

// Space Complexity: O(N*M) -  We are using an external array of size ‘N*M)’. Stack Space is eliminated.