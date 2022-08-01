function canPartitionSpace(arr) {
    let sum = arr.reduce((acc, ele) => acc + ele, 0);

    if (sum % 2 == 1) return false;
    else {
        let prev = Array(k + 1).fill(0);
        let cur = Array(k + 1).fill(0);
        // base case => target =0 
        prev[0] = true;
        cur[0] = true
        // on index = 0, if target== a[0] retun 0, dont need to loop for all the target values
        if (arr[0] < k) prev[a[0]] = true;

        for (let i = 1; i < arr.length; i++) {
            for (let target = 1; target <= k; target++) {
                let notTake = prev[target];
                let take = target - a[i] >= 0 ? prev[target - a[i]] : false;
                cur[target] = take || notTake;
            }
            prev = [...cur];
        }
        return prev[k];
    }
}

//Time Complexity: O(N*K) +O(N)

// Reason: There are two nested loops that account for O(N*K) and at starting we are running a for loop to calculate totSum.
// SC = O(target)