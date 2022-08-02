
function MaxFallingPathSum(i, j, arr, m) {
    // top down approach so moving from m,n to 0,0
    if (i == 0) return arr[0][j];
    if (j > m || j < 0) return -1e9;
    // either move up , left-up, or right-up
    let up = matrix[i][j] + MaxFallingPathSum(i - 1, j, arr, m);
    let leftDiagonal = matrix[i][j] + MaxFallingPathSum(i - 1, j-1, arr, m);
    let rightDiagonal = matrix[i][j] + MaxFallingPathSum(i - 1, j + 1, arr, m);
    return Math.max(up, leftDiagonal, rightDiagonal)
}

// TC = O(3^n)
// SC = O(N)

function getMaxPathSum(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let max = 0;

    for (let j = 0; j < m; j++) {
        max = Math.max(max, MaxFallingPathSum(n - 1, j, arr, m))
    }
    return max;
}