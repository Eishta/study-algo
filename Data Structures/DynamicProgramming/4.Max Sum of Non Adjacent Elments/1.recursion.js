/**
 * 
 * @param {*} n => starts from the last index of arr
 * @param {*} arr 
 * @returns 
 */
function MaxNonAdjacentSum(n, arr) {
    if (n == 0) return arr[0];
    if (n < 0) return 0;
    let pick = arr[n] + MaxNonAdjacentSum(n - 2, arr);// pick the cur, skip the next and move to n-2
    let notPick = 0 + MaxNonAdjacentSum(n - 1, arr);
    return Math.max(pick, notPick);
}

// tc = O(2^n) => 2 choices at each step
// SC = O(N) => recursive space
