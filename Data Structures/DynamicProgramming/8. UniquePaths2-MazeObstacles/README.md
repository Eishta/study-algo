We are given an “N*M” Maze. The maze contains some obstacles. A cell is ‘blockage’ in the maze if its value is -1. 0 represents non-blockage. There is no path possible through a blocked cell.

We need to count the total number of unique paths from the top-left corner of the maze to the bottom-right corner. At every cell, we can move either down or towards the right.

Example -> M = 3 , N = 2
Output = 3 ways

## Solution 
just add a new condition that if arr[i][j] === -1 , return 0
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