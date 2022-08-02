We are given an array ‘ARR’ with N positive integers. We need to find if we can partition the array into two subsets such that the sum of elements of each subset is equal to the other.

If we can partition, return true else return false
Example -
arr = [2,3,3,3,4,5] 
Output=> {2,3,5} and {3,3,4} both are equal to 10
answer = true


## Solution 
Pick and notPick 
Base case will return either 1 or 0
1-> if the subset gives the sum S
0 -> if the subset does not give the sum S

### Recursion
1. Express the problem in terms of indexes.-> index, sum
2. Top down approach so we move from n-1 to 0 indexes, value can be picked or not picked in each recurrence
3. Base case -> 1. if sum = 0 , return 1;
                2. if index = 0 , and sum = a[0], return 1
4. Recurrence relation - take => a[ind]<=sum ? f(ind -1, sum - a[ind]) : 0,
 notTake = f(ind -1, sum)
   f(ind,target) = take + notTake

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