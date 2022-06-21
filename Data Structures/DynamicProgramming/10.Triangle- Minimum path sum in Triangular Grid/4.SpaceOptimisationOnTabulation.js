
function minimumPathSumOfTriangleSpace(n, triangle) {
    let prev = Array(n).fill(0);
    let cur = Array(n).fill(0);

    for (let j = 0; j < n; j++) {
        prev[j] = triangle[n - 1][j];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {

            let down = triangle[i][j] + prev[j];
            let diagonal = triangle[i][j] + prev[j + 1]
            cur[j] = Math.min(down, diagonal);
        }
        prev = cur;
    }
    return dp[0][0]

}

minimumPathSumOfTriangleSpace(triangle.length, triangle)


// Time Complexity: O(N*N)

// Reason: There are two nested loops

// Space Complexity: O(N)

// Reason: We are using an external array of size ‘N’ to store only one row.