function rodCutting(n, price) {
    let dp = Array(n).fill().map(() => Array(n + 1).fill(-1))
    function solve(ind, lengthOfRod) {
        if (ind === 0) {
            return price[0] * lengthOfRod;
        }
        if (dp[ind][lengthOfRod] !== -1) return dp[ind][lengthOfRod]
        let take = -Infinity;
        if ((ind + 1) <= lengthOfRod) take = price[ind] + solve(ind, lengthOfRod - (ind + 1))
        let notTake = 0 + solve(ind - 1, lengthOfRod);
        dp[ind][lengthOfRod] = Math.max(take, notTake);
        return dp[ind][lengthOfRod];
    }
    return solve(n - 1, n)
}


// Time Complexity: O(N*N) -  There are N*(N+1) states therefore at max ‘N*(N+1)’ new problems will be solved.
// Space Complexity: O(N*N) + O(N) -  We are using a recursion stack space(O(N)) and a 2D array ( O(N*(N+1)).