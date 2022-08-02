We are given two strings S1 and S2, we want to know how many distinct subsequences of S2 are present in S1.

Input: s = "rabbbit", t = "rabbit"
Output: 3

Input: s = "babgbag", t = "bag"
Output: 5

## Solution 
* Brute Force -> generate all the subsequences of s and compare each of them with the string t

if the chars match 
=> 2 cases either pick the char from s to match or not 
=> pick = solve(i-1, j-1)
=> not Pick = solve(i-1, j)

if the chars dont match =>
only one choice
=> dont pick the char of s => solve(i-1, j)

### Recursion
1. Express the problem in terms of indexes-> i and j for each strings -> f(i, j) = either f(i-1,j-1) + f(i-1, j) or f(i-1, j)
2. Base case -> 1. if i < 0 , means we didnt find a match - return 0
3. if j < 0 , we found a match - return 1
4. TC = exponential -> 2^n + 2^m

### Memo
introduce dp => 2D => [i][j] => TC = n * m

### Tabulation
Initialization: Shifting of indexes
In the recursive logic, we set the base case to if(i<0 || j<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.
now the base case will be if(i==0 || j==0) return 0
1. we take a 2D DP [str1.length][str2.length]=> initialise with 0
2. base case ->  if(j==0) return 1 
3. loop for all the rows => i = 1 to n  and j = 1 to m, calculate the match  and not match 
   match =  dp[i--][j--] + dp[i-1][j]
   notmatch = dp[i-1][j]
4. return dp[n][m]   

### Space optimisation
1. prev will be a str2 + 1 size array and it can be solved with only 1 array as we are using the j th and j-1 th index which is already calculated 
