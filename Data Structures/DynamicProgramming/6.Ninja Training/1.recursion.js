
function ninjaTraining(arr) {
    return solve(arr, arr[0].length, arr.length - 1);
}

function solve(arr, last, n) {
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
    // traverse all the combinations -> traverse all the activities and find the max of all except the last chosen
    for (let k = 0; k < arr[0].length; k++) {
        if (k !== last) {
            activity = arr[n][k] + solve(arr, k, n - 1)
            max = Math.max(activity, max)
        }
    }
    return max;
}