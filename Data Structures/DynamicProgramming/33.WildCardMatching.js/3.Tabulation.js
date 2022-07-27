let isMatch = function (s, p){
    let m = s.length, n = p.length;
    let dp = Array(m + 1).fill().map(()=> Array(n + 1).fill(0));
    dp[0][0] = true;
    for(let i = 1;i<=m;i++){
        dp[i][0] = false;
    }
    for(let j = 1;j<=n;j++){
        dp[0][j] = dp[0][j-1] && p[j-1] === '*';
    }
    
    for(let i = 1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(s[i-1] === p[j-1] || p[j-1] === '?'){
                dp[i][j] = dp[i-1][j-1];
            }else {
                if(p[j-1] === '*'){
                    dp[i][j] = dp[i-1][j] || dp[i][j-1]
                }
                else dp[i][j] = false;
            }
        }
    }
    return dp[m][n]
}

// TC: O(N*M) -  There are two nested loops
// SC: O(N*M) -  We are using an external array of size ‘N*M’. Stack Space is eliminated.