var minDistance = function (word1, word2) {
    function solve(i, j) {
        if (i < 0) {
            return j + 1;
        }
        if (j < 0) {
            return i + 1;
        }
        if (word1[i] === word2[j]) return 0 + solve(i - 1, j - 1);
        return 1 + Math.min(solve(i - 1, j - 1), solve(i, j - 1), solve(i - 1, j))
    }
    return solve(word1.length - 1, word2.length - 1)
};

// TC - exponential
// SP - O(m + n)