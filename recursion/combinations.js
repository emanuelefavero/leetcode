// * Combinations

// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// TIP: This is a recursive backtracking solution

/**
 * @param {number} n
 * @param {number} k
 * @returns {number[][]}
 */

// O(n!) time (factorial) - O(n) space
function combine(n, k) {
  let result = []

  // start at 1 because we can't have 0 in the combination
  backtrack(n, k, 1, [], result) // [] is the current combination

  // return all possible combinations
  return result
}

function backtrack(n, k, start, combination, result) {
  // base case - combination is complete
  if (combination.length === k) {
    result.push([...combination])
    return
  }

  // loop through the numbers from start to n
  for (let i = start; i <= n; i++) {
    // add the number to the current combination
    combination.push(i)

    // recursively backtrack with the next number
    backtrack(n, k, i + 1, combination, result)

    // remove the number from the current combination
    combination.pop()
  }
}

// -------------------------------
// TESTS

console.log(combine(4, 2)) // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
