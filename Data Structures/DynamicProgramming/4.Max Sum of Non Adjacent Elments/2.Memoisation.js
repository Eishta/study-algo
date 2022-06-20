/**
 * 
 * @param {*} n => starts from the last index of arr
 * @param {*} arr 
 * @returns 
 */
function MaxNonAdjacentSumMemo(n, arr) {
    let dp = [];
    function solve(n) {
        if (n == 0) return arr[0];
        if (n < 0) return 0;
        if (dp[n]) return dp[n];
        let pick = arr[n] + solve(n - 2);// pick the cur, skip the next and move to n-2
        let notPick = 0 + solve(n - 1);
        dp[n] = Math.max(pick, notPick);
        return dp[n]
    }
    return solve(n);
}

// tc = O(n) => the overlapping subproblems are resolved in O(1)
// SC = O(N) => recursive space
