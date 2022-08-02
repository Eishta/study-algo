let isMatch = function (s, p) {
    let m = s.length, n = p.length;
    let prev = Array(n + 1).fill(false);
    let cur = Array(n + 1).fill(false);
    prev[0] = true;
    cur[0] = false;
    for (let j = 1; j <= n; j++) {
        prev[j] = prev[j - 1] && p[j - 1] === '*';
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                cur[j] = prev[j - 1];
            } else {
                if (p[j - 1] === '*') {
                    cur[j] = prev[j] || cur[j - 1]
                }
                else cur[j] = false;
            }
        }
        prev = [...cur]
    }
    return prev[n]
}

// TC: O(M*N) -  There are two nested loops
// SC: O(N) -  We are using an external array of size ‘N+1’ to store two rows.