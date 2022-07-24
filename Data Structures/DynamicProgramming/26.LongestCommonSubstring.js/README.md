A substring of a string is a subsequence in which all the characters are consecutive. Given two strings, we need to find the longest common substring.

str = "abc"
substrings = "", "a", "b", "c", "ab", "bc", "abc"

Exaple: a = "adebc", b = "dcadb"
Answer: "ad"

## Solution 
- Brute Force -> generate all the substrings of both the strings and compare each element of a 1st substring array with the 2nd -> TC - exponential

compare character wise and if matches -> reduce both indexes-> ind1--, ind2-- , else -> 0 bcz we want consequtive matching characters 


### Tabulation
Initialization: Shifting of indexes
In the recursive logic, we set the base case to if(ind1<0 || ind2<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.
now the base case will be if(ind1==0 || ind2==0) return 0
1. we take a 2D DP [str1.length][str2.length]=> initialise with 0
2. base case ->  if(ind1==0 || ind2==0) return 0 -> for the 1st row and 1st column fill with 0 -> already done in initialisation
3. loop for all the rows => i = 1 to n  and j = 1 to m, calculate the match  and not match 
   match = 1 + dp[ind1--][ind2--]
   notmatch = 0
4. return dp[n][m]   

### Space optimisation
1. prev will be a str2 + 1 size array and same cur and fill with 0 
