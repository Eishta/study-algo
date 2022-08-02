function minimumPathSumOfTriangle(i, j, arr) {
    // moving from row 0 to n-1 
    if (i == n - 1) return arr[i][j];
    // either move down or diagonal
    let down = arr[i][j] + minimumPathSumOfTriangle(i + 1, j);
    let diagonal = arr[i][j] + minimumPathSumOfTriangle(i + 1, j + 1);
    return Math.min(down, diagonal)
}

// TC = O(2^n);
// SC = O(N)