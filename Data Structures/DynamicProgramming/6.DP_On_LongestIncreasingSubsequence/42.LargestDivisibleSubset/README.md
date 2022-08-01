A divisible subset is the one in which if we pick two elements i and j from the subset, then either arr[i]%arr[j] == 0 or arr[j] % arr[i] == 0. For example, [16,8,4] is a divisible subset.

=> order of elements dont matter

Example: [1,16,7,8,4]
Divisible subsets :- {1, 16, 8, 4}

## Solution
As order is not a concern , we can sort the array.
We will use the LIS program here such that the arr[i]%arr[prev] === 0

### 