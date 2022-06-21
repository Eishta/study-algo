
function MaximumChocolatesTab(r, c) {
    // use 2D matrix for the same 
    let prev = Array(m).fill().map(()=> Array(m))
    let cur = Array(m).fill().map(()=> Array(m))
    // base case -> when i reaches the destination the last row -> r-1 
    for (let j1 = 0; j1 < c; j1++) {
        for (let j2 = 0; j2 < c; j2++) {
            if (j1 == j2) prev[j1][j2] = grid[r - 1][j1];
            else prev[j1][j2] = grid[r - 1][j1] + grid[r - 1][j2];
        }
    }
    // i -> r-2 to 0, j - 0 to c-1
    for (let i = r - 2; i >= 0; i--) {
        for (let j1 = 0; j1 < c; j1++) {
            for (let j2 = 0; j2 < c; j2++) {
                let max = -Infinity;
                for (let dj1 = -1; dj1 <= 1; dj1++) {
                    for (let dj2 = -1; dj2 <= 1; dj2++) {
                        let value = 0;
                        if (j1 == j2) value = grid[i][j1];
                        else value = grid[i][j1] + grid[i][j2];
                        if(j1 + dj1 >=0 && j1 + dj1 < c && j2 + dj2 >=0 && j2 + dj2 < c){
                            value += prev[j1 + dj1][j2 + dj2];

                        }else value += -Infinity
                        max = Math.max(max, value)
                    }
                }
                cur[j1][j2] = max;
            }
        }
        prev = cur;
    }
    return prev[0][c-1]
}


// Time Complexity: O(N*M*M)*9

// Reason: The outer nested loops run for (N*M*M) times and the inner two nested loops run for 9 times.

// Space Complexity: O(M*M)

// Reason: We are using an external array of size ‘M*M’.