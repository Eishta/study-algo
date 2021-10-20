// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
// Input: word1 = "horse", word2 = "ros"
// Output: 3

var minDistance = function (word1, word2) {
    // edge cases - when either of the string is empty we have to perform reither all insert or all remove operations 
    // if (word1.length === 0) return word2.length;
    // if (word2.length === 0) return word1.length;
    let dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1));

    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            // if first string is empty, we insert all chars of second string
            if (i == 0) dp[i][j] = j;
            // if second string is empty, we remove all chars of first string
            else if (j == 0) dp[i][j] = i;
            // if last chars of both strings are equal, ignore last and recur for remaining
            else if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            // if last char is diff, consider all other possibilities
            else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], // replace
                dp[i - 1][j], // remove
                dp[i][j - 1]); // insert
        }
    }
    return dp[word1.length][word2.length]
};