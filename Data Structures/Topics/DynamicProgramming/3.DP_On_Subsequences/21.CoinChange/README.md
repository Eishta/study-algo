We are given an array Arr with N distinct coins and a target. We have an infinite supply of each coin denomination. We need to find the number of ways we sum up the coin values to give us the target.


Example -
Input: coins = [1,2,3], target = 4
Output: 4 ways
Explanation: [1,1,1,1], [1,1,2], [2,2], [1,3]


## Solution 
Take or not Take 
Twist -> in take , we can take the same element multiple times if the ele = 2 and target = 8, 2 can be taken 4 times
so we do not change the index

### Recursion
1. Express the problem in terms of indexes.-> index, target
2. Top down approach so we move from n-1 to 0 indexes, target can be picked or not picked in each recurrence
3. Base case -> if index = 0 , return (target % coins[0] == 0)
4. Recurrence relation - take => f(ind, target - coins[ind]), notTake = f(ind -1, target)
   f(ind,target) = take + notTake

### Memo
introduce dp => 2D => [ind][target]

### Tabulation
1. we take a 2D DP [ind][target] initialised with 0
2. base case -> i == 0, for all target i,  0 to T, return 1 if (i % coins[0]) == 0
3. loop for all the rows => i = 1 to  n-1, and target = 0 to T, 
4. calculate take and not Take and then return the dp[n-1][T]


### Space optimisation
1. prev will be a target size array and same cur 
