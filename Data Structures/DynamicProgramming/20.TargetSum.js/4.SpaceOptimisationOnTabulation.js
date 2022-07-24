// tabulation

function findWays(sum, arr) {
    let prev = Array(sum + 1).fill(0);
    if (arr[0] == 0) prev[0] = 2; // 2 ways pick or not pick
    else prev[0] = 1 // 1 => not pick

    // on index = 0, if it is not 0 and target == a[0] return 1 for the pick case
    if (arr[0] !== 0 && arr[0] <= sum) prev[arr[0]] = 1;

    for (let i = 1; i < arr.length; i++) {
        let cur = Array(sum + 1).fill(0);
        for (let target = 1; target <= sum; target++) {
            let notTake = prev[target];
            let take = 0;
            if (arr[i] <= target) take = prev[target - a[i]];
            cur[target] = take + notTake;
        }
        prev = [...cur];
    }
    return dp[arr.length - 1][sum];
}

function targetSum(target, arr) {

    let totalSum = 0;
    totalSum = arr.reduce((a, b) => a + b, 0);

    if ((totalSum - target) % 2 == 1) return 0; // it should be even not odd
    if ((totalSum - target) < 0) return 0; // should be positive 

    let s2 = (totalSum - target) / 2; // now s2 becomes the target

    // find the number of ways s2 can be achieved
    return solve(arr.length - 1, s2, arr)

}


// Time Complexity: O(N*K) - Reason: There are two nested loops

// Space Complexity: O(K) - Reason: We are using an external array of size ‘K+1’ to store only one row.