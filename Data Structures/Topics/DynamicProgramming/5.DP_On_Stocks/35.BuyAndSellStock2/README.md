We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:

We can buy and sell the stock any number of times.
In order to sell the stock, we need to first buy it on the same or any previous day.
We can’t buy a stock again after buying it once. In other words, we first buy a stock and then sell it. After selling we can buy and sell again. But we can’t sell before buying and can’t buy before selling any previously bought stock.

### Recursion
1.  Express the problem in terms of indexes. => f(ind, buy), where ind -> 0 to arr.length and buy = 0 or 1 => if 1 you can buy , if 0 you can sell
2. Base case -> 
* if i === n return 0
3. f(i, buy) = if(buy === 1) return max(-arr[i] + f(i+1, 0), 0 + f(i+1, 1)) else return max(arr[i] + f(i+1, 1), 0 + f(i+1, 0)) 
4. TC = exponential -> 2^n + 2^m



