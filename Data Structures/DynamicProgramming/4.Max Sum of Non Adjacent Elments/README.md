Given an array of ‘N’  positive integers, we need to return the maximum sum of the subsequence such that no two elements of the subsequence are adjacent elements in the array.


Example 1:

Input: n = 4, arr =[2,1,4,9]
Output: 11
Explanation: 
1. 2 + 4 = 6
2. 1 + 9 = 10
3. 2 + 9 = 11 => answer



## SOLUTION

### Recursion 
1. Express in indexes 
2. Find all the combinations but here we have k choices to choose at each recursive call
3. Return the sum/ max/ min

-> 
1. At each step , we can either pick that element or not 
2. Check the base cases => as it is top down approach, we move from n to 0,
    so f(0) = arr[0], when there is only one element,
    if n <0 , return 0;
3. Recurrence relation => max(arr[n] + f(n-2), 0 + f(n-1))

### Memoisation 
1. Check if there are  repeating subproblems -> here we have to calculate f(1), f(2) ....many times so we can store them in a dp
2. introduce a dp array of n size and if the computation is stored in it return it or else calculate-> store and return

### Tabulation
1. To reduce the recursive stack space , we use tabulation
2. Check the base case -> f(0) => arr[0], we store them in DP => dp=[arr[0]]
3. It is a bottom up approch, so we start calculating from 1 and move towards n -> for every value of n , we calculate the max if we pick it or not
