Given two values M and N, which represent a matrix[M][N]. We need to find the total unique paths from the top-left cell (matrix[0][0]) to the rightmost cell (matrix[M-1][N-1]).

Example -> M = 3 , N = 2
Output = 3 ways 

## Solution 

### Recursion
1. We need to calculate the ways -> so we either return 1 or 0
2. Top down approach so we move from matrix[m-1][n-1] to matrix[0][0]
3. Base case -> 1. Reached the destination matrix[0][0] => i = 0. j= 0 return 1 => f(0,0) = 1
                2. Reached out of bound index either i = -1 or j =-1 return 0
4. Recurrence relation - we can either move up or left -> so two choices at each step 
   f(i,j) = f(i-1, j) + f(i, j-1)

### Memo
introduce dp

### Tabulation
1. we take a 2D DP 
2. Loop for all the rows and cols of matrix
3. base case -> i,j = 0,0 => dp[i][j] = 1
4. dp[i,j] = dp[i, j-1], dp[i-1, j]

### Space optimisation
1. we need only the one above row to compute the up element and one cur array to get the left element
2. this reduces the space to O(N) to store only one row