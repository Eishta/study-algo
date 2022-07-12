
function MaxFallingPathSum(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let dp = Array(n).fill().map(() => Array(m).fill(0));
    let max = 0;

    // base case
    // for 1st row => i = 0 
    for (let j = 0; j < m; j++) {
        dp[0][j] = arr[0][j];
    }

    // start from 2nd row
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let up = dp[i - 1][j] + arr[i][j];
            let leftDiagonal = arr[i][j];
            if (j - 1 >= 0) leftDiagonal += dp[i - 1][j - 1];
            else leftDiagonal = -1e9;

            let rightDiagonal = arr[i][j];
            if (j + 1 < m) rightDiagonal += dp[i - 1][j + 1];
            else rightDiagonal = -1e9;

            dp[i][j] = Math.max(up, leftDiagonal, rightDiagonal);
        }
    }

    for (let j = 0; j < m; j++) {
        max = Math.max(max, dp[n - 1][j]);
    }
    return max;

}


function getMaxPathSum(arr) {
    return MaxFallingPathSum(arr);
}

// Time Complexity: O(N*M)

// Reason: There are two nested loops

// Space Complexity: O(N*M)

// Reason: We are using an external array of size ‘N*M’. The stack space will be eliminated.