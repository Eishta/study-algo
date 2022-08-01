Bitonic subsequnce -> can be an increasing subsequence or a decreasing subsequence or first increasing then decreasing

example: 1,2,3,4
4,3,2,1
1,2,5,6,4,3 => mountain array


### Solution 
1. maintain a dp1 for LIS 
2. Maintain a dp2 for LDS => longest decreasing subsequence
3. return the max (dp1[i] + dp2[i] - 1 )