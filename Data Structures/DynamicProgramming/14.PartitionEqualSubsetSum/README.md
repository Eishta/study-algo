We are given an array ‘ARR’ with N positive integers. We need to find if we can partition the array into two subsets such that the sum of elements of each subset is equal to the other.

If we can partition, return true else return false
Example -
arr = [2,3,3,3,4,5] 
Output=> {2,3,5} and {3,3,4} both are equal to 10
answer = true


## Solution 
Sum of elements of S1 + sum of elements of S2 = sum of elements of array.
Sum of elements of S1 = sum of elements of S2.

S1 = S2 = (S/2).

1. If S (sum of elements of the input array) is odd , there is no way we can divide it into two equal halves, so we can simply return false.
2. If S is even, then we need to find a subsequence in the input array whose sum is equal to S/2 because if we find one subsequence with sum S/2, the remaining elements sum will be automatically S/2. So, we can partition the given array. Hence we return true.

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