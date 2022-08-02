/**
 * ### Recursion 
 * 1. How can we reach a point -> we have only two options -> 1 step or 2 step 
 * 2. if I want to reach step 6 -> I can reach it if I take 1 step from 5 or 2 steps from 4 ,
 *    so 6 can be reached in ways 4 and 5 can be reached
 * 3. Recurrence relation -> f(6) = f(5) + f(4) => f(6-1) + f(6-2)
 *                        -> f(n) = f(n-1) + f(n-2)
 * 4. Base cases => ways to reach 0 = 1, 
 *    if we want to calculate f(1) => f(0) + f(-1) => if(n < 0) return 0 so f(1)= 1
 */


function climbingStairs(n) {
    if (n == 0 || n == 1) return 1;
    return climbingStairs(n - 1) + climbingStairs(n - 2);
}

// Tc = O(2^n) as we have 2 choices at each step
