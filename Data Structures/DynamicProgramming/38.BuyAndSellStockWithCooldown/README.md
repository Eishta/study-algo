=> cooldown

We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:

We can buy and sell the stock any number of times.
In order to sell the stock, we need to first buy it on the same or any previous day.
We can’t buy a stock again after buying it once. In other words, we first buy a stock and then sell it. After selling we can buy and sell again. But we can’t sell before buying and can’t buy before selling any previously bought stock.
We can’t buy a stock on the very next day of selling it. This is the cooldown clause.

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

Input: prices = [1]
Output: 0

### Recursion
1.  Express the problem in terms of indexes. => f(ind, buy, cap), 
    where ind -> 0 to arr.length => initial value = 0
    buy - 0 / 1 => initial value = 0 (buy)
    cap = no. of transactions left => initial value = k
2. Base case -> 
* if i === n || cap == 0 return 0
3. Explore all the possible values -> pick for buy or not , pick for sell or not
* if(buy == 0) => buy the stock 
* * pickBuy => -prices[i] + f(i + 1, 1, cap)
* * notPickBuy => f(i + 1, 0, cap)
* * return max(pickBuy, notPickBuy)
* if(buy == 1) => sell the stock
* * pickSell => prices[i] + f(i + 2, 0, cap - 1)
* * notPickSell => f(i + 1, 1, cap)
* * return max(pickSell, notPickSell)

4. TC = exponential



