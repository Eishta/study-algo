A subsequence of a string is a list of characters of the string where some characters are deleted ( or not deleted at all) and they should be in the same order in the subsequence as in the original string.


str = "abc"
subsequences = "", "a", "b", "c", "ab", "ac", "bc", "abc"

Exaple: a = "adebc", b = "dcadb"
a can have 2^5 subsequences and b can have 2^5 .
Answer: "adb"

dp[n][m] => length of the common string when a is of length n and b is of length m

dp[i][j] => if(a[i] == b[j]) => dp[i-1][j-1] + 1, else max(dp[i-1][j], dp[i][j-1])

so to get the common string, the char will be picked when both the strings have same char, and we move diagonal => i-1 and j-1 
if the chars are not same, get the max of the left and up , and move to the bigger side 
example, if left > up => move left -> i--,  else move up -> j--
 
