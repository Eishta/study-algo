
function countWaysToMakeChangeUtil(arr, ind, T) {
    if (ind == 0) {
        return (T % arr[0] == 0);
    }
    notTaken = countWaysToMakeChangeUtil(arr, ind - 1, T);

    taken = 0;
    if (arr[ind] <= T)
        taken = countWaysToMakeChangeUtil(arr, ind, T - arr[ind]);

    return  notTaken + taken;
}


function countWaysToMakeChange(arr, n, T) {
    return countWaysToMakeChangeUtil(arr, n - 1, T);
}

// Time Complexity : Exponential
// Space Complexity: O(T)