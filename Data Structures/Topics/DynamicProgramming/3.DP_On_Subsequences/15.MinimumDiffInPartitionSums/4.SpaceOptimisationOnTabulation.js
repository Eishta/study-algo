function minimumSubsetDiffernce(arr) {
    let k = arr.reduce((acc, ele) => acc + ele, 0);

    let prev = Array(k + 1).fill(false);
    // base case => target =0 
    prev[0] = true
    // on index = 0, if target== a[0] retun 0, dont need to loop for all the target values
    if (a[0] <= k) prev[k] = true;

    for (let i = 1; i < arr.length; i++) {
        let cur = Array(k + 1).fill(false)
        for (let target = 1; target <= k; target++) {
            let notTake = prev[target];
            let take = target - a[i] >= 0 ? prev[target - a[i]] : false;
            cur[target] = take || notTake;
        }
        prev = [...cur];
    }

    let mini = Number.MAX_SAFE_INTEGER;
    let n = arr.length
    // loop through the last row of DP
    for (let i = 0; i <= k; i++) {
        if (prev[i] == true) {
            // calculate the diff
            let s1 = i, s2 = k - i;
            mini = Math.min(mini, Math.abs(s1 - s2))
        }
    }

    return mini;

}

// Time Complexity: O(N*k) +O(N) +O(N)

// Reason: There are two nested loops that account for O(N*k), at starting we are running a for loop to calculate k and at last a for loop to traverse the last row.

// Space Complexity: O(k)

// Reason: We are using an external array of size ‘k+1’ to store only one row.