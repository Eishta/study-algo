
function MaxFallingPathSum(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let prev = Array(m).fill(0);
    let cur = Array(m).fill(0);
    let max = 0;

    // base case
    for (let j = 0; j < m; j++) {
        prev[j] = arr[0][j];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let up = prev[j] + arr[i][j];
            let leftDiagonal = arr[i][j];
            if (j - 1 >= 0) leftDiagonal += prev[j - 1];
            else leftDiagonal = -1e9;

            let rightDiagonal = arr[i][j];
            if (j + 1 < m) rightDiagonal += prev[j + 1];
            else rightDiagonal = -1e9;

            cur[j] = Math.max(up, leftDiagonal, rightDiagonal);
        }
        prev = cur;
    }

    for (let j = 0; j < m; j++) {
        max = Math.max(max, prev[j]);
    }
    return max;

}


function getMaxPathSum(arr) {
    return MaxFallingPathSum(arr);
}

// Time Complexity: O(N*M)

// Reason: There are two nested loops

// Space Complexity: O(M)

// Reason: We are using an external array of size ‘M’ to store only one row.