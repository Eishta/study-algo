function subsetSumEqualToKTab(sum, arr) {
    let dp = Array(arr.length).fill().map(() => Array(sum + 1).fill(0));
    // base case => sum =0 
    for (let i = 0; i < arr.length; i++) {
        dp[i][0] = 1;
    }
    // on index = 0, if target== a[0] return 1, dont need to loop for all the target values
    if (a[0] <= sum) dp[0][a[0]] = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let target = 1; target <= sum; target++) {
            let notTake = dp[i - 1][target];
            let take = target - a[i] >= 0 ? dp[i - 1][target - a[i]] : 0;
            dp[i][target] = take + notTake;
        }
    }
    return dp[arr.length - 1][sum];
}


// Time Complexity: O(N*K)

// Reason: There are two nested loops

// Space Complexity: O(N*K)

// Reason: We are using an external array of size ‘N*K’. Stack Space is eliminated