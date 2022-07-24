First, we need to understand what a subsequence/subset is.

A subset/subsequence is a contiguous or non-contiguous part of an array, where elements appear in the same order as the original array.
For example, for the array: [2,3,1] , the subsequences will be [{2},{3},{1},{2,3},{2,1},{3,1},{2,3,1}} but {3,2} is not a subsequence because its elements are not in the same order as the original array.

Example -
arr = [1,2,3,4], target = 4
answer = true


## Solution 
 We can rather try to generate all subsequences using recursion and whenever we get a single subsequence whose sum is equal to the given target, we can return true.

### Recursion
1. Express the problem in terms of indexes.-> index, target
2. Top down approach so we move from n-1 to 0 indexes, target can be picked or not picked in each recurrence
3. Base case -> 1. if target = 0 , return true;
                2. if index = 0 , and traget= a[0], return true
4. Recurrence relation - take => f(ind -1, target - a[ind]), notTake = f(ind -1, target)
   f(ind,target) = take || notTake

### Memo
introduce dp => 2D => [ind][target]

### Tabulation
1. we take a 2D DP [ind][target]
2. base case -> for all rows, when target = 0, return true, when ind = 0 and traget = a[0], return true=> dp[0][a[0]] = true
3. loop for all the rows => i =0 to  n-1 and target = 0 is filled so take 1 to  <=target and do take and not take and return ther ||

### Space optimisation
1. prev will be a target size array and same cur 
2. prev[0] and cur[0] = true, => when target = 0, for taregt = a[0]=> prev[a[0]] = true
3. loop through i and target , and take and not take will use prev and we will calculate cur,
   after loop ends for col-> target , prev = [...cur];