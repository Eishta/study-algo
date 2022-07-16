

function solve(ind, target, arr, dp) {
    if (ind === 0) {
        if (target == 0 && a[0] == 0) return 2; // 0 can be taken or not taken
        if (target == 0 || target == arr[0]) return 1; // if target == 0, not taken => 1, if target == arr[0] , take == 1
        return 0;
    }
    if (dp[ind][target] !== -1) return dp[ind][target];
    let take = 0;
    // we will move down but target will reamin same as we did not take it
    let notTake = solve(ind - 1, target, arr, dp);
    // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
    if (target >= a[ind]) take = solve(ind - 1, target - a[ind], arr, dp);
    dp[ind][target] = take + notTake;
    return dp[ind][target]
}


function targetSum(target, arr) {

    let totalSum = 0;
    totalSum = arr.reduce((a, b) => a + b, 0);

    if ((totalSum - target) % 2 == 1) return 0; // it should be even not odd
    if ((totalSum - target) < 0) return 0; // should be positive 

    let s2 = (totalSum - target) / 2; // now s2 becomes the target
    let dp = Array(arr.length).fill().map(ele => Array(s2 + 1).fill(-1))
    // find the number of ways s2 can be achieved
    return solve(arr.length - 1, s2, arr, dp)

}


// Time Complexity: O(N*K)

// Reason: There are N*K states therefore at max ‘N*K’ new problems will be solved.

// Space Complexity: O(N*K) + O(N)

// Reason: We are using a recursion stack space(O(N)) and a 2D array ( O(N*K)).

