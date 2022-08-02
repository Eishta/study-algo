var numDistinct = function (s, t) {
    function solve(i, j) {
        if (j < 0) return 1;
        if (i < 0) return 0;
        if (s[i] === t[j]) {
            return solve(i - 1, j - 1) + solve(i - 1, j);
        }
        return solve(i - 1, j)
    }
    return solve(s.length - 1, t.length - 1)
};


// TC = O(2^n + 2^m)
// SC = O(n + m) 