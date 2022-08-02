
function ninjaTraining(arr) {
    let rows = arr.length, cols = arr[0].length;
    let dp = Array(rows).fill().map(e=> Array(cols).fill(0))
    return solve(arr, arr[0].length, arr.length - 1, dp);
}

function solve(arr, last, n, dp) {
    if(dp[n][last])return dp[n][last];
    if (n === 0) {
        let max = 0;
        for (let k = 0; k < arr[0].length; k++) {
            if (k !== last) {
                max = Math.max(max, arr[0][k]);
            }
        }
        return max;
    }

    let max = 0, activity;
    // traverse all the combinations
    for (let k = 0; k < arr[0].length; k++) {
        if (k !== last) {
            activity = arr[n][k] + solve(arr, k, n - 1, dp)
            max = Math.max(activity, max)
        }
    }
    dp[n][last] = max;
    return max;
}

// tc = O(N * (cols + 1) * cols) =>  There are N*4 states and for every state, we are running a for loop iterating three times.
// sc =  O(N) + O(N*4) => recursion space = O(N), 2D array of n * (cols) size=> here it is 4