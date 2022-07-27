var minDistance = function (word1, word2) {
    let dp = Array(word1.length).fill().map(() => Array(word2.length).fill(-1))
    function solve(i, j) {
        if (i < 0) {
            return j + 1;
        }
        if (j < 0) {
            return i + 1;
        }
        if (dp[i][j] !== -1) return dp[i][j]
        if (word1[i] === word2[j]) dp[i][j] = 0 + solve(i - 1, j - 1);
        else dp[i][j] = 1 + Math.min(solve(i - 1, j - 1), solve(i, j - 1), solve(i - 1, j))
        return dp[i][j]
    }
    return solve(word1.length - 1, word2.length - 1)
};


// TC: O(N*M) - There are N*M states therefore at max ‘N*M’ new problems will be solved.
// SC: O(N*M) + O(N+M) -  We are using a recursion stack space(O(N+M)) and a 2D array ( O(N*M)).