A thief wants to rob a store. He is carrying a bag of capacity W. The store has ‘n’ items. Its weight is given by the ‘wt’ array and its value by the ‘val’ array. He can either include an item in its knapsack or exclude it but can’t partially have it as a fraction. We need to find the maximum value of items that the thief can steal.

Example -
Input:
N = 3
W = 4
values[] = {1,2,3}
weight[] = {4,5,1}
Output: 3


## Solution 
Pick and not pick

### Recursion
1. Express the problem in terms of indexes.-> index, weightInBagLeft
2. Top down approach so we move from n-1 to 0 indexes, weight can be picked or not picked in each recurrence
3. Base case -> 1. if index = 0 , and return => 1. val[0] if wt[0] < weightInBagLeft
                                             => 2. else return 0;   
4. Recurrence relation -> take => f(ind -1, weightInBagLeft - wt[ind]) + val[ind], notTake = f(ind -1, weightInBagLeft)
   f(ind,weightInBagLeft) = max(take, notTake)

### Memo
introduce dp => 2D => [ind][weightInBagLeft + 1]

### Tabulation
1. we take a 2D DP [ind][weightInBagLeft + 1]=> initialise with 0
2. base case ->  At ind==0, we are considering the first element, if the capacity of the knapsack is greater than the weight of the first item, we return val[0] as answer.
3. loop for all the rows => i = 1 to  n-1 and w = 0 to weightInBagLeft, calculate the take and not take 
   take = weightInBagLeft - w[ind] >=0 ? val[ind] + dp[ind-1][weightInBagLeft - w[ind]] : -Infinity
   notTake = 0 + dp[ind-1][weightInBagLeft]
4. return dp[n-1][weightInBagLeft]   

### Space optimisation
1. prev will be a weightInBagLeft + 1 size array and same cur and fill with 0 
2. prev[w] = val[0] for w= wt[0] to weightInBagLeft
3. loop through i(1 to n-1) and w(0 to weightInBagLeft) , and take and not take will use prev and we will calculate cur,
   after loop ends for col , prev = cur;
4. return prev[weightInBagLeft]