
// if theer are overlapping subproblems, then only we can do memoisation
function frogJumpsMemo(n, arr) {
    let dp = [];
    function solve(n, arr) {
        if (n == 0) return 0;
        // if present return the stored answer
        if (dp[n]) return dp[n];
        // else calculate and store
        let min = Number.MAX_SAFE_INTEGER;
        for (i = 1; i <= k; i++) {
            if (n - i >= 0) {
                min = Math.min(min, frogJumps(n - i, k, arr) + Math.abs(arr[n] = arr[n - i]))
            }
        }
        dp[n] = min;
        return dp[n]
    }

    return solve(n, arr)
}

// Tc = O(N * K) The overlapping subproblems will return the answer in constant time O(1). Therefore the total number of new subproblems we solve is ‘n * k’.

// SC = O(n)
// Reason: We are using a recursion stack space(O(N)) and an array (again O(N)). Therefore total space complexity will be O(N) + O(N) ≈ O(N)function frogJumps(n, k, arr) {

