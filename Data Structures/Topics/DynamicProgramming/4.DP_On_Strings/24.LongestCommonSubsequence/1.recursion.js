function lcs(a, b) {
    let n = a.length - 1, m = b.length - 1;
    function solve(ind1, ind2) {
        if (ind1 < 0 || ind2 < 0) {
            return 0;
        }
        if (a[ind1] === b[ind2]) return 1 + solve(ind1--, ind2--);
        else {
            return Math.max(solve(ind1--, ind2), solve(ind1, ind2--));
        }
    }
    return solve(n, m)
}


// TC = exponential
