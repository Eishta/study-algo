
function MaxFallingPathSum(i, j, arr, dp, m) {
    if (j > m || j < 0) return -1e9;
    if (i == 0) return arr[0][j];

    // either move up , left-up, or right-up
    let up = matrix[i][j] + MaxFallingPathSum(i - 1, j, arr, m);
    let leftDiagonal = matrix[i][j] + MaxFallingPathSum(i - 1, j - 1, arr, m);
    let rightDiagonal = matrix[i][j] + MaxFallingPathSum(i - 1, j + 1, arr, m);
    dp[i][j] = Math.max(up, leftDiagonal, rightDiagonal)
    return dp[i][j]
}


function getMaxPathSum(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let dp = Array(n).fill().map(() => Array(m).fill(0))
    let max = 0;

    for (let j = 0; j < m; j++) {
        max = Math.max(max, MaxFallingPathSum(n - 1, j, arr, dp, m))
    }
    return max;

}

// Time Complexity: O(N*N)

// Reason: At max, there will be M*N calls of recursion to solve a new problem,

// Space Complexity: O(N) + O(N*M)

// Reason: We are using a recursion stack space: O(N), where N is the path length and an external DP Array of size ‘N*M’.