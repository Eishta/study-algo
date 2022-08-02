function solve(arr) {
    let prev1 = arr[0], prev2 = 0, cur;
    for (let i = 1; i < arr.length; i++) {
        let pick = i - 2 >= 0 ? arr[i] + prev2 : Number.MIN_SAFE_INTEGER;
        let notPick = 0 + prev1;
        cur = Math.max(pick, notPick);
        prev2 = prev1;
        prev1 = cur
    }
    return prev1
}
function houseRobber( arr) {
    let arr1 = arr.slice(1);
    let arr2 = arr.slice(0, -1);

    let ans1 = solve(arr1);
    let ans2 = solve(arr2);
    return Math.max(ans1, ans2)

}
// TC = O(n) = loop
// SP = O(1) 