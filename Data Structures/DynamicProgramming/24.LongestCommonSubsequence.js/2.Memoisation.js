function lcs(a, b) {

    let n = a.length - 1, m = b.length - 1;
    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(-1))
    function solve(ind1, ind2) {
        if (ind1 < 0 || ind2 < 0) {
            return 0;
        }
        if (dp[ind1][ind2] !== -1) return dp[ind1][ind2];
        if (a[ind1] === b[ind2]) dp[ind1][ind2] = 1 + solve(ind1--, ind2--);
        else {
            dp[ind1][ind2] = Math.max(solve(ind1--, ind2), solve(ind1, ind2--));
        }
        return dp[ind1][ind2];
    }
    return solve(n, m)
}


// Time Complexity: O(N*M) - There are N*M states therefore at max ‘N*M’ new problems will be solved.

// Space Complexity: O(N*M) + O(N+M) -  We are using an auxiliary recursion stack space(O(N+M)) (see the recursive tree, in the worst case, we will go till N+M calls at a time) and a 2D array ( O(N*M)).