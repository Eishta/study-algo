
function minimumPathSumOfTriangleTab(n, triangle) {
    let dp = Array(n).fill().map(() => Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        dp[n - 1][j] = triangle[n - 1][j];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {

            let down = triangle[i][j] + dp[i + 1][j];
            let diagonal = triangle[i][j] + dp[i + 1][j + 1]
            dp[i][j] = Math.min(down, diagonal);
        }
    }
    return dp[0][0]

}

minimumPathSumOfTriangleTab(triangle.length, triangle)


// Time Complexity: O(N*N)

// Reason: There are two nested loops

// Space Complexity: O(N*N)

// Reason: We are using an external array of size ‘N*N’. The stack space will be eliminated.