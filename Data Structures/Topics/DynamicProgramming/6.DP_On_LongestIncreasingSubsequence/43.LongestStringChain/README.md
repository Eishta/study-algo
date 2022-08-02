We are given an array of strings (sat words[ ]), and we need to return the longest string chain. This longest string chain is defined as:

A subsequence of words[ ] of the string.
Every element of this subsequence ( a string) except the first one can be formed by inserting a single character into the previous element.
The first element of this subsequence can be any string from the words[ ] array.


Example: - words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']
Output : - ['a', 'ba', 'bda', 'bdca']

every time the length of the string increases and one char gets added to the prev string

### Solution
1. sort the words as per the length of the words
2. Use LIS to get the max length of the array following the conditions 
* * the length of prev + 1  = length of words[i] 
* * there is one one char that is not matching 