// at every step, we had two options: include an item or skip it. 
// If we skip an item, then we take the profit from the remaining items (i.e., from the cell right above it);
// if we include the item, then we jump to the remaining profit to find more items. = max profit - profits[i]

// INPUT:- solveKnapsack([1, 6, 10, 16],[1, 2, 3, 5],7)
// dp Array at the end
// 0: [0, 1, 1, 1, 1, 1, 1, 1]
// 1: [0, 1, 6, 7, 7, 7, 7, 7]
// 2: [0, 1, 6, 10, 11, 16, 17, 17]
// 3: [0, 1, 6, 10, 11, 16, 17, 22]

// Step 1: 22 i not comming from the above row => include the object 4 => p= 22-16=6, w= 7-5=2
// Step 2: move to 6 in the same row
// Step 3: 6 comes from row 3 so move to row 3
// Step 4: 6 comes from row 2 so move to row 2
// Step 5: 6 comes from row 1 so move to row 1
// Step 7: 6 comes from row 0 so include object 2=> p= 6-6=0, w= 2-2=0
// Step 8: End


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
    // string to store the objects that are added
    let selectedWeights = '';
    // variable to check which object is added
    let totalProfit = dp[n - 1][capacity];
    // variable to store the remaining capacity once the object that is added is found
    let remainingCapacity = capacity;
    // loop through all the rows to check which objects are added
    for (let i = n; i > 0; i--) {
        // if the profit in row above the current row is not equal, then the object is added ,
        // so exclude the object to find next added object
        if (totalProfit !== dp[i - 1][remainingCapacity]) {
            selectedWeights = `${weights[i]} ${selectedWeights}`;
            totalProfit -= profits[i];
            remainingCapacity -= weights[i];
        }
    }
    // if the total profit is not equal to zero, then add the object 1 
    if (totalProfit !== 0) {
        selectedWeights = `${weights[0]} ${selectedWeights}`;
    }
    console.log('Selected Weights are ', selectedWeights);
    // return the last element of the matrix
    return dp[n - 1][capacity];
}