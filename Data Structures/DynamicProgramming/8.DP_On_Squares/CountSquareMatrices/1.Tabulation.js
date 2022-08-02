
var countSquares = function (matrix) {
    let rows = matrix.length;
    let col = matrix[0].length;
    let dp = Array(rows).fill().map(() => Array(col).fill(0));
    let sum = 0;
    // copy the first row and column to dp
    for (let i = 0; i < rows; i++) {
        dp[i][0] = matrix[i][0];

    }
    for (let j = 0; j < col; j++) {
        dp[0][j] = matrix[0][j]
    }

    // starting for 2nd row and from 2nd column
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < col; j++) {
            // if the value is 0, no square can be formed => 0
            if (matrix[i][j] === 0) {
                dp[i][j] = 0;
            }
            // if the value is 1, 1 square is formed by itself + the min of the top, left and diag
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }

    }
    // sum up all the sqaures formed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            sum += dp[i][j];
        }
    }
    return sum
};