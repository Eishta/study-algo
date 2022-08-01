function minimumPathSum(i, j, arr) {
    // top down approach so moving from m,n to 0,0
    if (i == 0 && j == 0) return arr[i][j];
    if (i < 0 || j < 0) return Number.MAX_SAFE_INTEGER;
    // either move up -> (i-1, j) or left => (i, j-1)
    let left = minimumPathSum(i, j - 1) + arr[i][j];
    let up = minimumPathSum(i - 1, j) + arr[i][j];
    return Math.min(up, left)
}