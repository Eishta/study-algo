// assuming the start point to be (0,0) and end as (m-1,n-1)
// Recursion 
let uniquePathRecursive = (i, j) => {
    if (i == 1 || j == 1) return 1;
    else return uniquePathRecursive(i - 1, j) + uniquePathRecursive(i, j - 1);
}
// TC and SC = Exponential 


// DP 
let uniquePathDP = (r, c) => {
    let arr = Array(r).fill().map(() => Array(c).fill(0));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (i == 0 || j == 0) {
                arr[i][j] = 1;
            }
            else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
            }
        }
    }
    return arr[r - 1][c - 1];
}
// TC = O(r*c), SC= O(r*c)


// With formula for nCr
let uniquePath = (m, n) => {
    let N = m + n - 2,
        r = m - 1,
        res = 1;
    for (let i = 1; i <= r; i++) {
        res *= (N - i + 1) / i;
    }
    return res;
}
//TC= O(r) , SC= O(1)

// With obstacles
let uniquePathWithObstacles = (matrix) => {
    let r = matrix.length, c = matrix[0].length;
    let dp = Array(r).fill().map(() => Array(c).fill(0));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] !== 1) {
                if ((i == 0 || j == 0)) {
                    dp[i][j] = 1;
                }
                else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }

        }
    }
    return dp[r - 1][c - 1]
}
