We are given an “N*M” matrix of integers. We need to find a path from the top-left corner to the bottom-right corner of the matrix, such that there is a minimum cost past that we select.

At every cell, we can move in only two directions: right and bottom. The cost of a path is given as the sum of values of cells of the given matrix.

Example ->[[5,9,6],[11,5,2]]
Output = minimum sum path = 5 -> 9 -> 2 = 16 

## Solution 

### Recursion
1. Express in terms of indexes -> i, j -> row, col
2. Top down approach so we move from matrix[m-1][n-1] to matrix[0][0]
3. Base case -> 1. Reached the destination matrix[0][0] => i = 0. j= 0 return arr[i][j] => f(0,0) = arr[0][0]
                2. Reached out of bound index either i = -1 or j =-1 return Infinity to reject this path
4. Recurrence relation - we can either move up or left -> so two choices at each step 
   f(i,j) = min(left, up) 
   up = f(i-1, j) + arr[i][j]
   left = f(i, j-1) + arr[i][j]
5. return the min of left and up   

### Memo
introduce dp

### Tabulation
1. we take a 2D DP 
2. Loop for all the rows and cols of matrix
3. base case -> i,j = 0,0 => dp[i][j] = 1
4. dp[i,j] = min(dp[i, j-1], dp[i-1, j])

### Space optimisation
1. we need only the one above row to compute the up element and one cur array to get the left element
2. this reduces the space to O(N) to store only one row