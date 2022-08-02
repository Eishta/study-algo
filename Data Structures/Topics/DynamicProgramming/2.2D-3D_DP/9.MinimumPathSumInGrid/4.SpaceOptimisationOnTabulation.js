// we need only the up row and the cur row to compute the solution
function minimumPathSumSpace(m, n, arr) {
    let prev = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        let cur = [];
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) cur[j] = arr[0][0];
            else {
                let left = arr[i][j];
                if (j - 1 >= 0) left += cur[j - 1];
                else left = Number.MAX_SAFE_INTEGER;

                let up = arr[i][j];
                if (i - 1 >= 0) up += prev[j]
                else up = Number.MAX_SAFE_INTEGER;

                cur[j] = Math.min(up, left)
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