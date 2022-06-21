We are given an array ‘ARR’ with N positive integers. We need to partition the array into two subsets such that the absolute difference of the sum of elements of the subsets is minimum.

We need to return only the minimum absolute difference of the sum of elements of the two partitions.
Example -
arr = [8,6,5] 
Output=> {8} and {6,5} both are equal to 8- (6+5) = 3
answer = true


## Solution 
from the last row of the DP taht we calculated in the question 13- subset sum, we can check if the target ranging from 0 to k exists in the array of size n

Calculate the sum of all the elements of the array -
if dp[n-1][target] == true,  diff = i - (sum-i), where i is the target between 0 to k and total sum - i gives the another subset sum
calculate it for all the tragets that can be achived and return the minimum
