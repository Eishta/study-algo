function frogJumpsTab(n, k, arr) {
    let dp = [0];

    for (let i = 1; i < n; i++) {
        let min = Number.MAX_VALUE;
        // loop and find the energy consumed for all steps 1 -> k and get the min out of all
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) { // to avoid the indexes like -1 , -2 ..
                let jump = dp[i - k] + Math.abs(arr[i - k], arr[i]);
                min = Math.min(min, jump)
            }
        }
        dp[i] = min;
    }
    return dp[n - 1];
}
// TC = O(n * k) = loop
// SP = O(n) = array