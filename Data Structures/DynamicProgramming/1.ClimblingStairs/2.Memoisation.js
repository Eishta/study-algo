

function climbingStairs(n) {
    let dp = [];
    function solve(n) {
        if (n == 0 || n == 1) return 1;
        // if present
        if (dp[n]) return dp[n];
        // else calculate and store
        let result = solve(n - 1) + solve(n - 2);
        dp[n] = result;
        // return the result
        return result;
    }
    return solve(n)
}

// SC = O(n) = dp + O(n) recursive space 
// to eleminate the recursiev space we do tabulation