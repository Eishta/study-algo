function ninjaTrainingTab(arr, n) {
    let prev = Array(4).fill(0);

    prev[0] = Math.max(arr[0][1], arr[0][2]);
    prev[1] = Math.max(arr[0][0], arr[0][2]);
    prev[2] = Math.max(arr[0][0], arr[0][1]);
    prev[3] = Math.max(arr[0][0], arr[0][1], arr[0][2]);

    for (let i = 1; i < arr.length; i++) {
        // assuming the last to be from 0 to 3, so loop from 0 to 4
        for (let last = 0; last < 4; last++) {
            let cur = [];
            // activities can be chossed between 0 to 2 for the current day
            for (let task = 0; task <= 2; task++) {
                if (task !== last) {
                    let activity = prev[task] + arr[i][task];
                    cur[last] = Math.max(activity, cur[last]);
                }
            }
        }
        // after all the indices of cur are filled -> from last 0 to 3
        prev = [...cur];
    }
    return prev[3]
}

// TC = O(N * 4* 3)
// SC= O(4)