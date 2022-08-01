The longest increasing subsequence is described as a subsequence of an array where:

All elements of the subsequence are in increasing order.
This subsequence itself is of the longest length possible.

Input: arr = [10,9,2,5,3,7,101,18]
Output: [2,3,7,101] or [2,3,7,18] => length = 4

### Solution 
the brute force method that comes to our mind is to generate all subsequences and then manually filter the subsequences whose elements come in increasing order and then return the longest such subsequence. 
TC = exponential ( 2n )

### Recursion
1. Express the problem in terms of indexes. => f(ind, prev_ind), 
    where ind -> 0 to arr.length => initial value = 0
    prev_ind -> lies between 0 to ind => initial value = -1
2. Base case -> 
* if i === n  return 0
3. Explore all the possible values -> 
* * pick => 1 + f(ind + 1, ind)
* * notPick => 0 + f(ind + 1, prev) , prev === -1 || arr[ind] > arr[prev]
* * return max(pick, notPick)

4. TC = exponential


### Space optimisation with single array
1. Every number is a subsequnec of length 1 => initialise a dp of length n filled with 1
2. loop through every element of the nums array -> from index 1 to n-1
3. for every element before nums[i], check if it can be taken in the subsequnce => nums[prev] < nums[i]
4. if nums[prev] < nums[i], dp[i] = max(1 + dp[prev], dp[i])

return the max of all the elements in dp 

### print LIS 
1. Keep updating the hash array with the index of element included in LIS every time a bigger subsequnece is formed for the cur element 
2. Loop through the hash array from the maxIndex to the index where hash[index] = index(no further element to add)