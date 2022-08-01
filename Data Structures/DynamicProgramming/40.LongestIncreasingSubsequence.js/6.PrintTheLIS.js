var printLIS = function (nums) {
    let n = nums.length;
    let max = 1; 
    let maxIndex = 0;
    let dp = Array(n).fill(1);
    let hash = Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        hash[i] = i
        for (let prev = 0; prev < i; prev++) {
            if (nums[prev] < nums[i] && 1 + dp[prev] > dp[i]) {
                dp[i] = 1 + dp[prev];
                hash[i] = prev;
            }
        }
        if(dp[i] > max){
            max = dp[i];
            maxIndex = i;
        }
    }
    let list = Array();
    list.push(nums[maxIndex])
    while(maxIndex !== hash[maxIndex]){
        maxIndex = hash[maxIndex]
        list.push(nums[maxIndex]);
    }
    return list.reverse()
};