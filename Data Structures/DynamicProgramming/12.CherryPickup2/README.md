We are given an ‘N*M’ matrix. Every cell of the matrix has some chocolates on it, mat[i][j] gives us the number of chocolates. We have two friends ‘Alice’ and ‘Bob’. initially, Alice is standing on the cell(0,0) and Bob is standing on the cell(0, M-1). Both of them can move only to the cells below them in these three directions: to the bottom cell (↓), to the bottom-right cell(↘), or to the bottom-left cell(↙).

When Alica and Bob visit a cell, they take all the chocolates from that cell with them. It can happen that they visit the same cell, in that case, the chocolates need to be considered only once.

They cannot go out of the boundary of the given matrix, we need to return the maximum number of chocolates that Bob and Alice can together collect.

## Solution 

here we have 2 fixed starting points and variable ending points
so we choose to move from start i.e. bottom in recusion and not top down 

### Recursion
1. We need to define the function with four parameters  i1,j1,i2, and j2 to describe the positions of Alice and Bob at a time.But as bob and alice are moving together , i is same for both. => i, j1, j2
2. Base cases => when they reach destination-> last row -> i == n-1 , if j1 === j2 , count only once => grid[i][j1] else return sum of both
3. if they go out of bound => as this is a question of max, we return the minimum value
4. Recurrnce => now j can move either j+1 , j , j-1, so the values that can be added to j => column is -1 , 0 +1 , same for j1 and j2 
5. there can be 9 combinations this way , for every value added to j1, the three values can be added to j2 => 3 choices for both j1 and j2 => 3 * 3 = 9 combinations
6. Calculate the max of all these 9 combinations and add to the current value => value for i, j1, j2


### Memo
1. Introduce dp => size [N][M][M]
2. if present return the dp answer 
3. calculate store and return 

### Tabulation
1. we take a 3D Dp of size n * M * M , wheer n is the rows , m is the columns
2. Base case => r-1 => last row 
fill all the @D matrix values for i = r-1 and j1 , j2 ranging from 0 to c-1.
when j1 = j2, dp[r-1][j1][j2] = grid[r-1][j1]
else dp[r-1][j1][j2] = grid[r-1][j1] + grid[r-1][j2]

3. Now we need to fill all the cells of the 3D Matrix , except for row r-1 , so we loop i from r-2 to 0, j1 and j2 having values from 0 to c-1
4. both j1 and j2 can be added with -1, 0, +1
so have 2 loops from -1 to +1 for both j1 and j2 
5. calculate the 9 possible combinations for each cell and then take the maximum and store in the current cell => dp[i][j1][j2]

### Space optimisation
1. we need a 2D matrix to store the values in the previous row => i+1 so we keep a prev 2D matrix .
2. we need a 2D matrix cur, to store the values calculated for cur i 