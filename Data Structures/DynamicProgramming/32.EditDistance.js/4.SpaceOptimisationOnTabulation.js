var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let prev = Array(n + 1).fill(0);
    let cur = Array(n + 1).fill(0);

    for (let j = 0; j <= word2.length; j++) {
        prev[j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        cur[0] = i;
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                cur[j] = prev[j - 1]
            } else {
                cur[j] = 1 + Math.min(cur[j - 1], prev[j], prev[j - 1])
            }
        }
        prev = cur
    }
    return dp[word1.length][word2.length]

};

// TC: O(N*M) - There are two nested loops
// SC: O(M) -  We are using a 1D array ( O(M)).