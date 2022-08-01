We are given a target sum of ‘X’ and ‘N’ distinct numbers denoting the coin denominations. We need to tell the minimum number of coins required to reach the target sum. We can pick a coin denomination for any number of times we want.

Example -
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [2], amount = 3
Output: -1


## Solution 
Take or not Take 
Twist -> in take , we can take the same element multiple times if the ele = 2 and target = 8, 2 can be taken 4 times
so we do not change the index

### Recursion
1. Express the problem in terms of indexes.-> index, target
2. Top down approach so we move from n-1 to 0 indexes, target can be picked or not picked in each recurrence
3. Base case -> if index = 0 , there can be two cases=> 
      1. if(coins[0] <= target) return target/coins[0]
      2. else return Infinty    
4. Recurrence relation - take => f(ind, target - coins[ind]), notTake = f(ind -1, target)
   f(ind,target) = min(take, notTake)

### Memo
introduce dp => 2D => [ind][target]

### Tabulation
1. we take a 2D DP [ind][target]
2. base case -> for all rows, when target >= coins[0], return target/coins[0] else return Infinty
3. loop for all the rows => i = 1 to  n-1, and target = 0 to amount, 
4. calculate take and not Take and then return the dp[n-1][T]


### Space optimisation
1. prev will be a target size array and same cur 
