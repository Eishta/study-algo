

let maxSumSubArray = (a) => {
    let [maxSoFar, currMax] = [a[0], a[0]];

    for(let i=0;i<a.length;i++){
        currMax = Math.max(a[i], currMax + a[i])
        maxSoFar = Math.max(currMax,maxSoFar);
    }
    return maxSoFar;

}
maxSumSubArray([-2, -3, 4, -1, -2, 1, 5, -3])
7