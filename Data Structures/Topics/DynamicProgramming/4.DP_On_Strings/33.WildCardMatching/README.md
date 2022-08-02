We are given two strings ‘S1’ and ‘S2’. String S1 can have the following two special characters:

‘?’ can be matched to a single character of S2.
‘*’ can be matched to any sequence of characters of S2. (sequence can be of length zero or more).
Input: word1 = "horse", word2 = "ros"
Output: 3

Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

## Solution 

if the chars match 
=> no operations needed ->  f(i-1,j-1).

if the chars dont match =>
If S1[i] == ‘?’, return f(i-1,j)
Else if S1[i] == ‘*’, return f(i-1,j) || f(i,j-1)
Else return false

Base case :- 
1. if s1 is exhausted -> (i<0) -> if (j<0) return true else return false
2. if s2 is exhausted -> if(i >=0) return true only if all chars left in s1 from 0 to i are equal to *

### Recursion
1. Express the problem in terms of indexes-> i and j for each strings -> f(i, j) = either f(i-1,j-1) or f(i-1 , j) || f(i, j-1) or false
2. Base case -> 
* if i < 0 && j < 0 return true
* if i < 0 && j >=0 return false
* if i>=0 && j < 0 return true only if left cahrs in s1 are *
4. TC = exponential -> 2^n + 2^m

### Memo
introduce dp => 2D => [i][j] => TC = n * m

### Tabulation
Initialization: Shifting of indexes
In the recursive logic, we set the base case to if(i<0 || j<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.


