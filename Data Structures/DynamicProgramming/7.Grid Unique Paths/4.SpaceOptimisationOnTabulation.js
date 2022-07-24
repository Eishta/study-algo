// we need only the up row and the cur row to compute the solution
function uniquePathsTab(m, n) {
    let prev = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        let cur = [];
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) cur[j] = 1;
            else {
                let left = j - 1 >= 0 ? cur[j - 1] : 0;
                let up = i - 1 >= 0 ? prev[j] : 0;
                cur[j] = up + left
            }
        }
        prev = [...cur];
    }
    return prev[n - 1];

}


// Time Complexity: O(M*N)

// Reason: There are two nested loops

// Space Complexity: O(N)

// Reason: We are using an external array of size ‘N’ to store only one row.