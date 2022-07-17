function rodCutting(lengthOfRod, price) {
    let dp = Array(lengthOfRod).fill().map(() => Array(lengthOfRod + 1).fill(0));

    for (let l = 0; l <= lengthOfRod; l++) {
        dp[0][l] = price[0] * l;
    }

    for (let i = 1; i < n; i++) {
        for (let l = 0; l <= lengthOfRod; l++) {
            let notTake = 0 + dp[i - 1][l];
            let take = -Infinity;
            if (i + 1 <= l) {
                take = price[i] + dp[i][l - i - 1]
            }
            dp[i][w] = Math.max(take, notTake)
        }
    }
    return dp[lengthOfRod - 1][lengthOfRod]
}

// Time Complexity: O(N*N) -  There are two nested loops

// Space Complexity: O(N*N) -  We are using an external array of size ‘N*(N+1)’. Stack Space is eliminated.
