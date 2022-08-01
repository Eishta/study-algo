function ninjaTrainingTab(arr, n) {
    let rows = arr.length, cols = arr[0].length;
    let dp = Array(rows).fill().map(e => Array(cols).fill(0));

    dp[0][0] = Math.max(arr[0][1], arr[0][2]);
    dp[0][1] = Math.max(arr[0][0], arr[0][2]);
    dp[0][2] = Math.max(arr[0][0], arr[0][1]);
    dp[0][3] = Math.max(arr[0][0], arr[0][1], arr[0][2]);

    for (let i = 1; i < arr.length; i++) {
        // assuming the last to be from 0 to 3, so loop from 0 to 4
        for (let last = 0; last < 4; last++) {
            // activities can be chossed between 0 to 2 for the current day
            for (let task = 0; task <= 2; task++) {
                if (task !== last) {
                    let activity = dp[i - 1][task] + arr[i][task];
                    dp[i][last] = Math.max(activity, dp[i][last]);
                }
            }
        }
    }
    return dp[n - 1][3]
}
// Time Complexity: O(N*4*3)
// Reason: There are three nested loops
// Space Complexity: O(N*4)
// Reason: We are using an external array of size ‘N*4’’.