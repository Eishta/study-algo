// here row = number of objects 
// columns = 0 to capacity
// it says either 0 => dont add or 1=> add , no partial addition of any object

let solveKnapsack = (profits, weights, capacity) => {
    let n = profits.length;
    if (!n || weights.length !== n || !capacity) return 0;
    let dp = Array(n).fill().map(() => Array(capacity + 1).fill(0));
    // profits at capacity =0 are always 0 as no object is added to the sack ==> fills the 1st columns elements with 0
    for (let i = 0; i < n; i++) {
        dp[i][0] = 0;
    }
    // fills the 1st row of dp array with the weight of object 1 if it is smaller or equal to given capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[0][c] = profits[0];
    }
    // loop through all the elements of the dp matrix and fill it based on the formula 
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = dp[i - 1][c];
            let profit2 = weights[i] <= c ? dp[i - 1][c - weights[i]] + profits[i] : 0;
            dp[i][c] = Math.max(profit1, profit2);
        }
    }
    // return the last element of the matrix
    return dp[n - 1][capacity];
}

// INPUT:- solveKnapsack([1, 6, 10, 16],[1, 2, 3, 5],7)
// dp Array at the end
// 0: [0, 1, 1, 1, 1, 1, 1, 1]
// 1: [0, 1, 6, 7, 7, 7, 7, 7]
// 2: [0, 1, 6, 10, 11, 16, 17, 17]
// 3: [0, 1, 6, 10, 11, 16, 17, 22]

// The above solution has a time and space complexity of O(N*C)O(N∗C),
// where ‘N’ represents total items, and ‘C’ is the maximum capacity.
