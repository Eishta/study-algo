
function frogJumps(n, k, arr) {
    if (n == 0) return 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (i = 1; i <= k; i++) {
        if (n - i >= 0) {
            min = Math.min(min, frogJumps(n - i, k, arr) + Math.abs(arr[n] - arr[n - i]))
        }
    }
    return min;
}

