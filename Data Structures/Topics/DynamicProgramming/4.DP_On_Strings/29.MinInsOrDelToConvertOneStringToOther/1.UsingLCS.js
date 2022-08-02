function lcs(a, b) {
    let n = a.length, m = b.length;
    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0))

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


function minimumInsertionsOrDeletions(a, b) {
    let lcsLength = lcs(a, b)

    return a.length + b.length - 2 * lcsLength;
}

// Time Complexity: O(N*M) - There are two nested loops

// Space Complexity: O(N*M) -  We are using an external array of size ‘N*M)’. Stack Space is eliminated.