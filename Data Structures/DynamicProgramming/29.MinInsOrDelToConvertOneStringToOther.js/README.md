We are given two strings, str1 and str2. We are allowed the following operations:

Delete any number of characters from string str1.
Insert any number of characters in string str1.

str : a = abcd , b = anc
after 2 deletions in string a =>  delete b and d => ac
after 1 insertion in string a => insert n => anc => a === b
operations = 3


### Solution
* keep the longest common subsequence intact -> keep ac intact-> delete the no matching from string 1 and insert the non matching in string 2 to string 1

=> no. of operations =  len of the string1 - len of the lcs  + len of the string2 - len of the lcs
=> no. of operations = a.length + b.length - 2 * lcs.length 


