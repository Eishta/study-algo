We are given a Triangular matrix. We need to find the minimum path sum from the first row to the last row.

At every cell we can move in only two directions: either to the bottom cell (↓) or to the bottom-right cell(↘)

Example -> M = 3 , N = 2
Output = 3 ways 

## Solution 
As we have a fixed starting point so we consider 0, 0 as the top and n-1 as the bottom
### Recursion
1. Express in terms of indexes -> i, j -> row, col
2. Top down approach so we move from matrix[m-1][n-1] to matrix[0][0]
3. Base case -> 1.There will be a single base case:
When i == N-1, that is when we have reached the last row, so the min path from that cell to the last row will be the value of that cell itself, hence we return mat[i][j].
4. Recurrence relation - we can either move down or diagonal down -> so two choices at each step 
   f(i,j) = min(left, up) 
   down = f(i+1, j) + arr[i][j]
   dg = f(i+1, j+1) + arr[i][j]
5. return the min of dg and down   

### Memo
introduce dp - 2D for i and j

### Tabulation
1. we take a 2D DP 
2. Loop for all the rows and cols of matrix
3. base case -> i==n-1 => dp[n-1][j] = arr[n-1][j]
4. dp[i,j] = min(down and diagonal)

### Space optimisation
1. we need only the one above row to compute the up element and one cur array to get the left element
2. this reduces the space to O(N) to store only one row