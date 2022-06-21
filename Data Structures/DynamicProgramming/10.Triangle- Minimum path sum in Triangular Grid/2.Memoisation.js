

function minimumPathSumOfTriangle(n, triangle) {

    let dp = Array(n).fill(-1);
    function solve(i, j) {
        // if present in dp, return it 
        if (dp[i][j] !== -1) return dp[i][j];

        // moving from row 0 to n-1 
        if (i == n - 1) return triangle[i][j];
        // either move down or diagonal
        let down = triangle[i][j] + solve(i + 1, j);
        let diagonal = triangle[i][j] + solve(i + 1, j + 1);
        dp[i][j] = Math.min(down, diagonal)
        return dp[i][j];
    }

    return solve(0, 0, triangle)
}


minimumPathSumOfTriangle(triangle.length, triangle)


// Time Complexity: O(N*N)

// Reason: At max, there will be (half of, due to triangle) N*N calls of recursion.

// Space Complexity: O(N) + O(N*N)

// Reason: We are using a recursion stack space: O((N),
//  where N is the path length and an external DP Array of size ‘N*N’.