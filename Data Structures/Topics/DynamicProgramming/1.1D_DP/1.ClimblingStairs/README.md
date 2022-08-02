You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps



Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


## SOLUTION

### Recursion 
1. How can we reach a point -> we have only two options -> 1 step or 2 step 
2. if I want to reach step 6 -> I can reach it if I take 1 step from 5 or 2 steps from 4 , so 6 can be reached in ways 4 and 5 can be reached
3. Recurrence relation -> f(6) = f(5) + f(4) => f(6-1) + f(6-2)
                       -> f(n) = f(n-1) + f(n-2)
4. Base cases => ways to reach 0 = 1, if we want to calculate f(1) => f(0) + f(-1) => if(n < 0) return 0 so f(1)= 1

### Memoisation 
1. Check if there are  repeating subproblems -> here we have to calculate f(1), f(2) ....many times so we can store them in a dp
2. introduce a dp array of n size and if the computation is stored in it return it or else calculate-> store and return

### Tabulation
1. To reduce the recursive stack space , we use tabulation
2. Check the base case -> f(0) => 0, f(1) = 1, we store them in DP => dp=[1,1]
3. It is a bottom up approch, so we start calculating from 0 and move towards n
4. dp[n] = dp[n-1] + dp[n-2], where we run a loop from 2 to n

### Space optimisation
1. To calculate dp[n] , we only need the last 2 elements => dp[n-1], dp[n-2]
2. Instead of storing the whole array, store only prev1 and prev2