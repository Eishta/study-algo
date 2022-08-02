A palindromic string is a string that is equal to its reverse. For example: “nitin” is a palindromic string. Now the question states to find the length of the longest palindromic subsequence of a string. It is that palindromic subsequence of the given string with the greatest length.


str : bbbab
LPS : bbbb   (subsequence -> same order but may not be consequtive)


### Brute Force 
* find all the subsequnces and manually find the palindromic one 
* time complexity : exponential

### Using DP - Tabulation and LCS 
* let a = str and b = reverse of str
* find the Longest common subsequence -> the str present in both a and b -> str and reverse of string which menas it is the longest Palindromic subsequence 


