

function climbStairs(n) {
    let cur, prev1 = 1, prev2 = 1;
    for (let i = 2; i <= n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1
}

// TC = O(n) = loop
// SC = O(3) => approx O(1) => static variables to store the prev results