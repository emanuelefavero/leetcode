/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank.
 * Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 *
 * @param {number[][]} accounts
 * @return number
 */

// O(n^2) time, O(n) space
function maximumWealth(accounts) {
  let sums = []

  for (let i = 0; i < accounts.length; i++) {
    // Get the sum of each array
    let sum = accounts[i].reduce((acc, curr) => acc + curr, 0)
    sums.push(sum)
  }

  // Return the max of the sums array
  return Math.max(...sums)
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
) // 6

// --------------------------------------------------------------------------
// ALTERNATE SOLUTIONS

// O(n^2) time, O(1) space
function maximumWealth2(accounts) {
  let max = 0

  for (let i = 0; i < accounts.length; i++) {
    let sum = 0

    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j] // add each element in the array
    }

    if (sum > max) max = sum // update max if sum is greater than max
  }

  return max
}
