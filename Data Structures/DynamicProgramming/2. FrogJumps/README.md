Given a number of stairs and a frog, the frog wants to climb from the 0th stair to the (N-1)th stair. At a time the frog can climb either one or two steps. A height[N] array is also given. Whenever the frog jumps from a stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. We need to return the minimum energy that can be used by the frog to jump from stair 0 to stair N-1.

Example 1:

Input: n = 4, height = [10,20,30,10]
Output: 20
Explanation:
1. 10-> 20-> 30-> 10 = 40 
2. 10-> 20 -> 10 = 20  (min)
3. 10-> 30 -> 10 = 40  



## SOLUTION

### Recursion 
1. Express in indexes 
2. Find all the combinations 
3. Return the sum/ max/ min

-> 
1. How can we reach a point -> we have only two options -> 1 step or 2 step jump and we want to return the enery consumed in teh jump
2. if I want to reach step 4 -> I can reach it if I take 1 step from 3 or 2 steps from 2 , so 4 can be reached in ways 2 or 3 can be reached, whichever is minimum
3. Recurrence relation -> f(4) = either f(2) + enery(2-> 4) or f(3) + energy(3-> 4)
4. Base cases => ways to reach 0 = 0 (no energy consumed form 0-> 0)

### Memoisation 
1. Check if there are  repeating subproblems -> here we have to calculate f(1), f(2) ....many times so we can store them in a dp
2. introduce a dp array of n size and if the computation is stored in it return it or else calculate-> store and return

### Tabulation
1. To reduce the recursive stack space , we use tabulation
2. Check the base case -> f(0) => 0, we store them in DP => dp=[0]
3. It is a bottom up approch, so we start calculating from 0 and move towards n
4. dp[n] = min((dp[n-1] + energy) , (dp[n-2] = energy)), where we run a loop from 2 to n

### Space optimisation
1. To calculate dp[n] , we only need the last 2 elements => dp[n-1], dp[n-2]
2. Instead of storing the whole array, store only prev1 and prev2