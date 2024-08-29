// * Find the Pivot Integer

/*
Given a positive integer n, find the pivot integer x such that:

- The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.
*/

function pivotInteger(n) {
  let totalSum = (n * (n + 1)) / 2
  let leftSum = 0

  // Iterate through all integers from 1 to n and check if the sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
  for (let x = 1; x <= n; x++) {
    leftSum += x
    let rightSum = totalSum - leftSum + x
    if (leftSum === rightSum) return x
  }

  return -1
}

// -------------------------
// TESTS

console.log(pivotInteger(8)) // 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
console.log(pivotInteger(1)) // 1
console.log(pivotInteger(4)) // -1
