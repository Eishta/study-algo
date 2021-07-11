let findPairsWithGivenSum = (a, sum) => {
    let [pairs, dict] = [[], {}];
    for (let i = 0; i < a.length; i++) {
        let x = sum - a[i];
        if (dict[x] !== undefined) {
            for (let j = 0; j < dict[x]; j++) {
                pairs.push([a[i], x]);
            }
        }
        dict[a[i]] = dict[a[i]] !== undefined ? dict[a[i]] + 1 : 1
    }
    return pairs;
}

// findPairsWithGivenSum([1,-3,3,1,2,1,4,-2], 2)
// (4) [Array(2), Array(2), Array(2), Array(2)]
// 0: (2) [1, 1]
// 1: (2) [1, 1]
// 2: (2) [1, 1]
// 3: (2) [-2, 4]
// length: 4