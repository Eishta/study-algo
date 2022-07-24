We are given two strings ‘S1’ and ‘S2’. We need to return their shortest common supersequence. A supersequence is defined as the string which contains both the strings S1 and S2 as subsequences.

a = "brute", b = "groot"

Answer: "bgruoote"

### Solution 
* Brute Force -> concat both the strings => "brutegroot"
* this is the worst case with TC = O(m + n)

Length of the supersequence = length of a + length of b - length of the lcs(included only once)
Print the supersequence -> 

##### Use print the LCS
* i = n, j = m, loop till > 0 for both
* if(a[i-1] === b[j-1]) include only once , i--, j--
* else if(dp[i-1][j] > dp[i][j-1]) push the a[i-1] to string and i--
* else push the b[j-1] to string and j--

### Tabulation
Initialization: Shifting of indexes
In the recursive logic, we set the base case to if(ind1<0 || ind2<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.
now the base case will be if(ind1==0 || ind2==0) return 0
1. we take a 2D DP [str1.length][str2.length]=> initialise with 0
2. base case ->  if(ind1==0 || ind2==0) return 0 -> for the 1st row and 1st column fill with 0 -> already done in initialisation
3. loop for all the rows => i = 1 to n  and j = 1 to m, calculate the match  and not match 
   match = 1 + dp[ind1--][ind2--]
   notmatch = 0
4. from the DP table, loop down till 0,0 and follow the above approach of printing
