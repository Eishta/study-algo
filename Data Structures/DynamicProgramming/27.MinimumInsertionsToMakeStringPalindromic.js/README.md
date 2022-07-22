A palindromic string is a string that is the same as its reverse. For example: “nitin” is a palindromic string. Now the question states that we are given a string, we need to find the minimum insertions that we can make in that string to make it a palindrome.


str : abcaa
after 2 insertions -> abca + cb + a


### Solution
* keep the palindromic subsequence chars intact, and if the char from front does not match the char from end add it

len of the string - len of the longest palindromic subsequence = no. of insertions 

### Using DP - Tabulation and LCS 
* let a = str and b = reverse of str
* find the Longest common subsequence -> the str present in both a and b -> str and reverse of string which menas it is the longest Palindromic subsequence 


