function uniquePaths(i, j) {
    // top down approach so moving from m,n to 0,0
    if (i == 0 && j == 0) return 1;
    if (i < 0 || j < 0) return 0;
    // either move up -> (i-1, j) or left => (i, j-1)
    return uniquePaths(i - 1, j) + uniquePaths(i, j - 1)
}