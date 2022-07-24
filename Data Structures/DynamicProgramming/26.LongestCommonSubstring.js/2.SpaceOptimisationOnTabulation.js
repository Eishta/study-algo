var longestCommonSubstring = function (a, b) {
    let n = a.length, m = b.length;
    let prev = Array(m + 1).fill(0)
    let cur = Array(m + 1).fill(0)
    let ans =0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                cur[j] = 1 + prev[j-1];
                ans = Math.max(cur[j], ans)
            }
            else {
                cur[j] = 0
            }
        }
        prev = [...cur];
    }
    return ans;

};

// Time Complexity: O(N*M) -  There are two nested loops.

// Space Complexity: O(M) -  We are using an external array of size ‘M+1’ to store only two rows.