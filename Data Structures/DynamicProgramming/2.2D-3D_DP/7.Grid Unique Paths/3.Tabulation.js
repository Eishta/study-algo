
function uniquePathsTab(m, n) {
    let dp = Array(m).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) dp[i][j] = 1;
            else {
                let left = j - 1 >= 0 ? dp[i][j - 1] : 0;
                let up = i - 1 >= 0 ? dp[i - 1][j] : 0;
                dp[i][j] = up + left
            }
        }
    }
    return dp[m - 1][n - 1]

}


// Time Complexity: O(M*N)

// Reason: There are two nested loops

// Space Complexity: O(M*N)

// Reason: We are using an external array of size ‘M*N’.