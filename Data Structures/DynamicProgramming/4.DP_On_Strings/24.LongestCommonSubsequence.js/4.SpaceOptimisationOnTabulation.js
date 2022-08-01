function lcs(a, b) {
    let n = a.length, m = b.length;
    let prev = Array(m + 1).fill(0), cur = Array(m + 1).fill(0);;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= m; j++) {
            if (a[i] === b[j]) {
                cur[j] = 1 + prev[j - 1];
            }
            else {
                cur[j] = Math.max(prev[j], cur[j - 1])
            }
        }
        prev = [...cur];
    }
    return prev[m]
}

// Time Complexity: O(N*M) -  There are two nested loops.

// Space Complexity: O(M) -  We are using an external array of size ‘M+1’ to store only two rows.