
// if theer are overlapping subproblems, then only we can do memoisation
function frogJumpsMemo(n, arr) {
    let dp = [];
    function solve(n, arr) {
        if (n == 0) return 0;
        // if present return the stored answer
        if (dp[n]) return dp[n];
        // else calculate and store
        let jump1 = Number.MAX_VALUE, jump2 = Number.MAX_VALUE;
        jump1 = frogJumps(n - 1, arr) + Math.abs(arr[n] = arr[n - 1]);
        if (n > 1) {
            jump2 = frogJumps(n - 2, arr) + Math.abs(arr[n] - arr[n - 2]);
        }
        dp[n] = Math.min(jump1, jump2);
        return dp[n]
    }

    return solve(n, arr)
}

// Tc = O(N) The overlapping subproblems will return the answer in constant time O(1). Therefore the total number of new subproblems we solve is ‘n’. Hence total time complexity is O(N).

// SC = O(n) 
// Reason: We are using a recursion stack space(O(N)) and an array (again O(N)). Therefore total space complexity will be O(N) + O(N) ≈ O(N)