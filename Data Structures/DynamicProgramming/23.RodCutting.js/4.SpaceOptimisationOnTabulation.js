function rodCutting(lengthOfRod, price) {
    let prev = Array(lengthOfRod + 1).fill(0);

    for (let l = 0; l <= lengthOfRod; l++) {
        prev[l] = price[0] * l;
    }

    for (let i = 1; i < n; i++) {
        let cur = Array(lengthOfRod + 1).fill(0);
        for (let l = 0; l <= lengthOfRod; l++) {
            let notTake = 0 + prev[l];
            let take = -Infinity;
            if (i + 1 <= l) {
                take = price[i] + cur[l - i - 1]
            }
            cur[w] = Math.max(take, notTake)
        }
        prev = cur;
    }
    return dp[lengthOfRod - 1][lengthOfRod]
}

// Time Complexity: O(N*N) -  There are two nested loops

// Space Complexity: O(N*N) -  We are using an external array of size ‘N*(N+1)’. Stack Space is eliminated.
