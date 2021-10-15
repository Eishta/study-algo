// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).

// Link: https://www.youtube.com/watch?v=NbgUZAoIz3g

var isMatch = function (s, p) {
    let dp = Array(p.length + 1).fill().map(() => Array(s.length + 1));
    for (let i = dp.length - 1; i >= 0; i--) {
        for (let j = dp[0].length - 1; j >= 0; j--) {
            if (i == dp.length - 1 && j == dp[0].length - 1) {
                dp[i][j] = true;
            }
            else if (i == dp.length - 1) {
                dp[i][j] = false;
            }
            else if (j == dp[0].length - 1) {
                dp[i][j] = p[i] == '*' ? dp[i + 1][j] : false;
            }
            else {
                dp[i][j] = s[j] === p[i] || p[i] === '?' ?
                    dp[i + 1][j + 1] :
                    p[i] === '*' ?
                        dp[i + 1][j] || dp[i][j + 1] :
                        false;
            }
        }
    }
    return dp[0][0]
};