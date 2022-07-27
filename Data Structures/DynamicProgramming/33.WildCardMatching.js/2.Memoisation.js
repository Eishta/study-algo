let isMatch = function (s, p) {
    let dp = Array(s.length).fill().map(() => Array(p.length).fill(-1))
    function solve(i, j) {

        if (i < 0 && j < 0) return true;
        if (j < 0 && i >= 0) return false;
        if (i < 0 && j >= 0) {
            for (let ii = 0; ii <= j; ii++) {
                if (p[ii] !== '*') return false;
            }
            return true
        }
        if (dp[i][j] !== -1) return dp[i][j]
        if (s[i] === p[j] || p[j] === '?') {
            dp[i][j] = solve(i - 1, j - 1)
        }
        else {
            if (p[j] === '*') {
                dp[i][j] = solve(i - 1, j) || solve(i, j - 1)
            } else dp[i][j] = false;
        }
        return dp[i][j];
    }

    return solve(s.length - 1, p.length - 1)
}

// TC: O(N*M) - There are N*M states therefore at max ‘N*M’ new problems will be solved.
// SC: O(N*M) + O(N+M) -  We are using a recursion stack space(O(N+M)) and a 2D array ( O(N*M)).