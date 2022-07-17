A subsequence of a string is a list of characters of the string where some characters are deleted ( or not deleted at all) and they should be in the same order in the subsequence as in the original string.


str = "abc"
subsequences = "", "a", "b", "c", "ab", "ac", "bc", "abc"

Exaple: a = "adebc", b = "dcadb"
a can have 2^5 subsequences and b can have 2^5 .
Answer: "adb"


## Solution 
- Brute Force -> generate all the subsequences of both the stringfs and compare each element of a 1st subsequence array with the 2nd -> TC - exponential

compare character wise and if matches -> reduce both indexes-> ind1--, ind2-- , else -> do ind1--, ind2 and ind1, ind2--

### Recursion
1. Express the problem in terms of indexes.-> 2 indexes - 1 for each strings -> f(n,n) = LCS btw str1(0...n) & str2(0...n)
2. Top down approach so we move from n-1 to 0 indexes,  can be picked or not picked in each recurrence
3. Base case -> 1. if ind1 or ind2 < 0 , and return => 0
4. Recurrence relation -> match => f(ind1--, ind2--) + 1, notMatch = Max(f(ind1 --, ind2) + f(ind1, ind2--))
   f(ind,lengthOFRodLeft) = max(take, notTake)
5. TC = exponential -> 2^n * 2^m

### Memo
introduce dp => 2D => [ind1][ind2] => TC = n * m

### Tabulation
Initialization: Shifting of indexes
In the recursive logic, we set the base case to if(ind1<0 || ind2<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.
now the base case will be if(ind1==0 || ind2==0) return 0
1. we take a 2D DP [str1.length][str2.length]=> initialise with 0
2. base case ->  if(ind1==0 || ind2==0) return 0 -> for the 1st row and 1st column fill with 0 -> already done in initialisation
3. loop for all the rows => i = 1 to n  and j = 1 to m, calculate the match  and not match 
   match = 1 + dp[ind1--][ind2--]
   notmatch = max(dp[ind1--][ind2], dp[ind1][ind2--])
4. return dp[n][m]   

### Space optimisation
1. prev will be a str2 + 1 size array and same cur and fill with 0 
