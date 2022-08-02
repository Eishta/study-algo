function subsetDiffEqualToKTab(sum, arr) {
    let dp = Array(arr.length).fill().map(() => Array(sum + 1).fill(0));
    if (arr[0] == 0) dp[0][0] = 2; // 2 ways pick or not pick
    else dp[0][0] = 1 // 1 => not pick

    // on index = 0, if it is not 0 and target == a[0] return 1 for the pick case
    if (arr[0] !== 0 && arr[0] <= sum) dp[0][arr[0]] = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let target = 1; target <= sum; target++) {
            let notTake = dp[i - 1][target];
            let take = target - a[i] >= 0 ? dp[i - 1][target - a[i]] : 0;
            dp[i][target] = take + notTake;
        }
    }
    return dp[arr.length - 1][sum];
}

function countPartitions(diff, arr) {
    totalSum = 0;
    for (i = 0; i < n; i++) {
        totalSum += arr[i];
    }

    //Checking for edge cases
    if (totalSum - diff < 0 || (totalSum - diff) % 2) return 0;

    return subsetDiffEqualToKTab((totalSum - diff) / 2, arr);
}
// Time Complexity: O(N*K)

// Reason: There are two nested loops

// Space Complexity: O(N*K)

// Reason: We are using an external array of size ‘N*K’. Stack Space is eliminated