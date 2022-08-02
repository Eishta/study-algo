var minCost = function (n, cuts) {
    let c = cuts.length;
    cuts.push(n);
    cuts.unshift(0)
    cuts.sort((a, b) => a - b);
    function solve(i, j) {
        if (i > j) return 0;
        let min = Infinity;
        for (let ind = i; ind <= j; ind++) {
            let length = cuts[j + 1] - cuts[i - 1];
            let cost = length + solve(i, ind - 1) + solve(ind + 1, j);
            min = Math.min(min, cost);
        }
        return min;
    }
    return solve(1, c);
};