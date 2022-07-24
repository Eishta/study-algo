function shortestCommonSupersequence(a, b) {
    let n = a.length, m = b.length;
    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0))
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = Math.max(ans, dp[i][j]);
            }
            else {
                dp[i][j] = 0;
            }
        }
    }
    let str = "";
    let i = n, j = m;
    while (i > 0 && j > 0) {
        if (a[i - 1] === b[j - 1]) {
            str = a[i - 1] + str;
            i--;
            j--;
        }
        else if (dp[i - 1][j] > dp[i][j - 1]) {
            // include i
            str = a[i - 1] + str
            i--
        }
        else {
            // inlcude j 
            str = b[j - 1] + str;
            j--
        }
    }
    while (i > 0) {
        // include i
        str = a[i - 1] + str
        i--
    }
    while (j > 0) {
        // include i
        str = b[j - 1] + str
        j--
    }

}

// Time Complexity: O(N*M) O(m+n) - There are two nested loops

// Space Complexity: O(N*M) -  We are using an external array of size ‘N*M)’. Stack Space is eliminated.


