function mazeObstacles(i, j, maze) {
    // top down approach so moving from m,n to 0,0
    if (i == 0 && j == 0) return 1;
    if (i < 0 || j < 0) return 0;
    if (i >= 0 && j >= 0 && maze[i][j] == -1) return 0
    // either move up -> (i-1, j) or left => (i, j-1)
    return mazeObstacles(i - 1, j, maze) + mazeObstacles(i, j - 1, maze)
}


// tc = O(2^n)
// sc = O((m-1) + (n-1))