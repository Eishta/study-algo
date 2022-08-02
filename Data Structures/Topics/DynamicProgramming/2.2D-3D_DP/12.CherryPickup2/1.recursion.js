// r-> rows, c-> cols, grid-> the matrix of chocolates
function MaximumChocolates(r, c, grid) {
    return solve(0, 0, c - 1, r, c, grid)
}

function solve(i, j1, j2, r, c, grid) {
    // 1. base cases 
    // out of bound case
    if (j1 < 0 || j2 < 0 || j1 >= c || j2 >= c) return -Infinity;
    // reached the destination row case
    if (i == r - 1) {
        // if both bob and alice are in the same col=> count chocolates only once
        if (j1 == j2) return grid[i][j1];
        // else count both 
        else return grid[i][j1] + grid[i][j2];
    }

    // 2. Explore all paths => we can add -1, 0, +1 to j1 and same to j2 
    // for every -1 in j1 , there can -1, 0 , +1 to j2 , so it becomes 9 states 
    let max = -Infinity;
    for (let dj1 = -1; dj1 <= 1; dj1++) {
        for (let dj2 = -1; dj2 <= 1; dj2++) {
            let value = 0;
            if (j1 == j2) value = grid[i][j1];
            else value = grid[i][j1] + grid[i][j2];

            value += solve(i + 1, j1 + dj1, j2 + dj2, r, c, grid);
            max = Math.max(max, value)
        }
    }
    return max;

}

// TC = O((3^n) * (3^n)) = exponential as for both j1 and j2 there are 3 choices
// SC = O(N) => recursive space for n number of rows