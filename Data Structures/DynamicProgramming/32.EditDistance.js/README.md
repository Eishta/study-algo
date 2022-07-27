Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Input: word1 = "horse", word2 = "ros"
Output: 3

Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

## Solution 

if the chars match 
=> no operations needed -> 0 + solve(i-1,j-1)

if the chars dont match =>
delete = => we can delete the char in word1 => delete and move to the next char for comparing -> solve(i-1, j)
insert => we can insert in word1 the same char=> insert at i + 1, match with j, move j to j-1 , i remains i=> solve(i, j-1)
replace => we can replace the char at i => match i with j and move both chars => solve(i-1, j-1)

=> Math.min(insert, delete, replace) + 1

### Recursion
1. Express the problem in terms of indexes-> i and j for each strings -> f(i, j) = either f(i-1,j-1) or  1 + min(f(i-1, j), f(i, j-1), f(i-1, j-1))
2. Base case -> 1. if i < 0 , we need to insert all the chars left in word2 so return j + 1
3. if j < 0 , we need to delete all the chars left in word1, so return i + 1
4. TC = exponential -> 2^n + 2^m

### Memo
introduce dp => 2D => [i][j] => TC = n * m

### Tabulation
Initialization: Shifting of indexes
In the recursive logic, we set the base case to if(i<0 || j<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.
now the base case will be if(i==0 || j==0) return 0
1. we take a 2D DP [str1.length][str2.length]=> initialise with 0
2. base case ->  for all i => 0 to word1.length and j =0 , return i
   -> for all j => 0 to word2.length and i =0, return j
3. loop for all the rows => i = 1 to n  and j = 1 to m, calculate the match  and not match 
   match =  dp[i--][j--]
   notmatch = 1 + min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1])
4. return dp[m][n]   

