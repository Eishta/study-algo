
var longestStrChain = function (words) {
    // return the length
    words.sort((a, b) => a.length - b.length);
    console.log(words)
    let n = words.length;
    let dp = Array(n).fill(1); // length of LIS till i
    let max = 1;
    for (let i = 1; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            if (compare(words[prev], words[i]) && 1 + dp[prev] > dp[i]) {
                dp[i] = 1 + dp[prev];
                max = Math.max(dp[i], max)
            }
        }
    }
    return max;
}

const compare = (a, b) => {
    if (a.length + 1 !== b.length) return false;
    let i = 0, j = 0;
    while (j < b.length) {
        if (i < a.length && a[i] === b[j]) {
            i++; j++;
        }
        else {
            j++;
        }
    }
    if (i === a.length && j === b.length) return true;
    else return false;
}