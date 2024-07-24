// * Best Time to Buy and Sell Stock II

/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/

// TIP: This is a greedy solution that adds the difference between the next day and the current day if the difference is positive.

/**
 * @param {number[]} prices
 * @returns {number}
 */

// O(n) time | O(1) space
function maxProfit(prices) {
  let sum = 0

  for (let i = 0; i < prices.length - 1; i++) {
    let difference = prices[i + 1] - prices[i]

    if (difference > 0) sum += difference
  }

  return sum
}

// -------------------------
// SOLUTION 2

// TIP: This solution is similar to the first one, but simply checks if the next day's price is greater than the current day's price and adds the difference to the sum

function maxProfit2(prices) {
  let sum = 0

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      sum += prices[i + 1] - prices[i]
    }
  }

  return sum
}

// -------------------------
// TESTS

// 1
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
/*
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

// 2
console.log(maxProfit2([7, 1, 5, 3, 6, 4])) // 7
