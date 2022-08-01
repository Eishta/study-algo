
function frogJumps(n, arr) {
    if (n == 0) return 0;
    let jump1 = Number.MAX_VALUE, jump2 = Number.MAX_VALUE;
    jump1 = frogJumps(n - 1, arr) + Math.abs(arr[n] - arr[n - 1]);
    if (n > 1) {
        jump2 = frogJumps(n - 2, arr) + Math.abs(arr[n] - arr[n - 2]);
    }
    return Math.min(jump1, jump2);
}

// Tc = O(2^n) as we have 2 choices at each step
