A Ninja has an ‘N’ Day training schedule. He has to perform one of these three activities (Running, Fighting Practice, or Learning New Moves) each day. There are merit points associated with performing an activity each day. The same activity can’t be performed on two consecutive days. We need to find the maximum merit points the ninja can attain in N Days.

We are given a 2D Array POINTS of size ‘N*3’ which tells us the merit point of specific activity on that particular day. Our task is to calculate the maximum number of merit points that the ninja can earn.

If the given ‘POINTS’ array is [[1,2,5], [3 ,1 ,1] ,[3,3,3] ],the answer will be 11 as 5 + 3 + 3.

### Recursion

On evry day, we need to know the activity chosen on prev day and we need to choose the max of the other two activities 
1. Base case -> On 1st day you will return the max of the two leaving the prev day activity 
2. Assuming we know the activity chosen on day n-1 => relation becomes Max (activity 1 , activity 2, activity 3) + f(n-1), as we are starting from f(n), we say that nothing happend before this so we will choose the max of the 3

### Memo 
introduce a DP

### Tabulation
1. check for the base case that comes on day 0
dp[0][0] = max(points[0][1], points[0][2]) 
dp[0][1] = max(points[0][0], points[0][2]) 
dp[0][2] = max(points[0][0], points[0][1]) 
dp[0][3] = max(points[0][0], points[0][1] and points[0][2]) 

2. Set an iterative loop which traverses dp array (from index 1 to n) and for every index set its value according to the recursive logic