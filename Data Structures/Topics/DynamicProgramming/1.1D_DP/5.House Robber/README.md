A thief needs to rob money in a street. The houses in the street are arranged in a circular manner. Therefore the first and the last house are adjacent to each other. The security system in the street is such that if adjacent houses are robbed, the police will get notified.

Given an array of integers “Arr” which represents money at each house, we need to return the maximum amount of money that the thief can rob without alerting the police.
Example 1:

Input: n = 4, arr =[2,1,4,9]
Output: 10
Explanation: 
1. 2 + 4 = 6
2. 1 + 9 = 10

## SOLUTION

### Tabulation
1. To reduce the recursive stack space , we use tabulation
2. the base case is f(0) = arr[0] , so we take dp =[arr[0]]
3. loop from 1 to arr.length , and calculate the pick and not pick 
3. here there is one condotion taht the first and last cant be selected at once , so we take 2 arrays 
1st -> not haveing the 1st element and the 2nd -> not having the last eleemnt 
4. Calculate the stuff on both and return the max
