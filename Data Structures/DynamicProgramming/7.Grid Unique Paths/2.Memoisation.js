function uniquePathsMemo(m, n) {
    let dp = [];
    function solve(i, j) {
        // top down approach so moving from m,n to 0,0
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] !== undefined) return dp[i][j];
        if (i == 0 && j == 0) return 1;

        // either move up -> (i-1, j) or left => (i, j-1)
        dp[i][j] = uniquePaths(i - 1, j) + uniquePaths(i, j - 1)
        return dp[i][j];
    }

    return solve(m, n)
}

// Time Complexity: O(M*N)

// Reason: At max, there will be M*N calls of recursion.

// Space Complexity: O((N-1)+(M-1)) + O(M*N)

// Reason: We are using a recursion stack space:O((N-1)+(M-1)),
//  here (N-1)+(M-1) is the path length and an external DP Array of size ‘M*N’.