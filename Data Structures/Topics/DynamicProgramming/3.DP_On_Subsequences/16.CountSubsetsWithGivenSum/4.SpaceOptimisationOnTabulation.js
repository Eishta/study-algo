function subsetSumEqualToKTab(sum, arr) {
    let prev = Array(sum + 1).fill(0);
    let cur = Array(sum + 1).fill(0);
    // base case => sum =0 , for all rows-> 0th index is 1sos we have two rows prev and cur
        prev[0] = 1; cur[0] =1;
    // on index = 0=> prev,  if target== a[0] return 1, dont need to loop for all the target values
    if (a[0] <= sum) prev[a[0]] = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let target = 1; target <= sum; target++) {
            let notTake = prev[target];
            let take = target - a[i] >= 0 ? prev[target - a[i]] : 0;
            cur[target] = take + notTake;
        }
        prev = [...cur];
    }
    return dp[arr.length - 1][sum];
}


// Time Complexity: O(N*K)

// Reason: There are three nested loops

// Space Complexity: O(K)

// Reason: We are using an external array of size ‘K+1’ to store only one row.