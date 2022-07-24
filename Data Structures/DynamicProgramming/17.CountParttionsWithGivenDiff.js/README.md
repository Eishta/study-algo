Find the subsets with given difference 


## Solution 
Pick and notPick 
Base case will return either 1 or 0

if we have a total sum , then S1 = totalSum - S2

diff = S1 - S2 , S1 > S2

diff = totalSum - S2 - S2 = totalSum - 2S2
S2 = (totalSum - diff)/2

2 egde cases-> S1>S2
and (totalSum - diff) should be even to avoid fractions

also if there are 0's involved in the arr 
the base cases wil change

count the number of 0=> example 2
2 0's can be arranged in 4 ways => 2^2
n 0's can be arranged in 2^n ways 
so add this to the answer

Count sum with given sum
arr = [0,0,1] and the target = 1.
ans should be 4 but the question 16 will give answer 1

so the base condition becomes after removing the below condition
if(target === 0)return 1 => (ther can be many ways depeneding on the number of 0 so remove this condition)

if(ind === 0) && (target === 0 && arr[ind] == 0) 2 was either pick or not pick

if(target=== 0 && arr[0] !==0) return 1=> not pick

esle return 0


### Recursion
1. Express the problem in terms of indexes.-> index, sum
2. Top down approach so we move from n-1 to 0 indexes, value can be picked or not picked in each recurrence
3. Base case -> 1. if sum = 0 , return 1;
                2. if index = 0 , and sum = a[0], return 1
4. Recurrence relation - take => a[ind]<=sum ? f(ind -1, sum - a[ind]) : 0,
 notTake = f(ind -1, sum)
   f(ind,target) = take + notTake

### Memo
introduce dp => 2D => [ind][target]

### Tabulation
1. we take a 2D DP [ind][target]
2. base case -> for all rows, when target = 0, return true, when ind = 0 and traget = a[0], return true=> dp[0][a[0]] = true
3. loop for all the rows => i =0 to  n-1 and target = 0 is filled so take 1 to  <=target and do take and not take and return ther ||

### Space optimisation
1. prev will be a target size array and same cur 
2. prev[0] and cur[0] = true, => when target = 0, for taregt = a[0]=> prev[a[0]] = true
3. loop through i and target , and take and not take will use prev and we will calculate cur,
   after loop ends for col-> target , prev = [...cur];