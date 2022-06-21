
function minimumPathSumTab(m, n, arr) {
    let dp = Array(m).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) dp[i][j] = arr[0][0];
            else {
                
                let left = arr[i][j];
                if (j - 1 >= 0) left += dp[i][j - 1];
                else left = Number.MAX_SAFE_INTEGER;

                let up = arr[i][j];
                if (i - 1 >= 0) up += dp[i - 1][j]
                else up = Number.MAX_SAFE_INTEGER;

                dp[i][j] = Math.min(up, left);
            }
        }
    }
    return dp[m - 1][n - 1]

}


// Time Complexity: O(M*N)

// Reason: There are two nested loops

// Space Complexity: O(M*N)

// Reason: We are using an external array of size ‘M*N’.