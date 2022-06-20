Given a number of stairs and a frog, the frog wants to climb from the 0th stair to the (N-1)th stair. The frog is allowed to jump up to ‘K’ steps at a time. If K=4, the frog can jump 1,2,3, or 4 steps at every index.. A height[N] array is also given. Whenever the frog jumps from a stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. We need to return the minimum energy that can be used by the frog to jump from stair 0 to stair N-1.

## SOLUTION

### Recursion 
1. Express in indexes 
2. Find all the combinations but here we have k choices to choose at each recursive call
3. Return the sum/ max/ min

-> 
1. How can we reach a point -> we have k options -> 1 step or 2 step or ,,, k steps jump and we want to return the minimum energy consumed among all the jumps to reach n
2. if I want to reach step 4 -> I can reach it if I take 1 step from 3 or 2 steps from 2, 3 steps from 1 , so 4 can be reached in ways 2 or 3 can be reached, whichever is minimum
3. Recurrence relation -> f(4) = either f(2) + enery(2-> 4) or f(3) + energy(3-> 4) or f(1) + energy(1-> 4)
4. Base cases => ways to reach 0 = 0 (no energy consumed form 0-> 0)

### Memoisation 
1. Check if there are  repeating subproblems -> here we have to calculate f(1), f(2) ....many times so we can store them in a dp
2. introduce a dp array of n size and if the computation is stored in it return it or else calculate-> store and return

### Tabulation
1. To reduce the recursive stack space , we use tabulation
2. Check the base case -> f(0) => 0, we store them in DP => dp=[0]
3. It is a bottom up approch, so we start calculating from 0 and move towards n -> for every value of n , we calculate the steps from 1 to k and get the min
