function subsetDiffEqualToKTab(target, arr) {
    let prev = Array(target + 1).fill(0);
    if (arr[0] == 0) prev[0] = 2; // 2 ways pick or not pick
    else prev[0] = 1 // 1 => not pick

    // on index = 0, if it is not 0 and target == a[0] return 1 for the pick case
    if (arr[0] !== 0 && arr[0] <= target) prev[arr[0]] = 1;

    for (let i = 1; i < arr.length; i++) {
        let cur = Array(target + 1).fill(0);
        for (let target = 1; target <= target; target++) {
            let notTake = prev[target];
            let take = target - a[i] >= 0 ? prev[target - a[i]] : 0;
            cur[target] = take + notTake;
        }
        prev = [...cur];
    }
    return prev[target];
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

// Reason: There are three nested loops

// Space Complexity: O(K)

// Reason: We are using an external array of size ‘K+1’ to store only one row.