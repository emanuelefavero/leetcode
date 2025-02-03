// * Find Missing and Repeated Values

/*
You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.
*/

/**
 * @param {number[][]} grid
 * @returns {number[]}
 */

// O(n) time | O(n) space
function findMissingAndRepeatedValues(grid) {
  let map = new Map()
  let row = grid.length
  let col = grid[0].length

  // Count the frequency of each number
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      map.set(grid[r][c], (map.get(grid[r][c]) || 0) + 1)
    }
  }

  let result = []

  // Find repeating number
  for (let [key, value] of map) {
    if (value > 1) {
      result[0] = key
      break
    }
  }

  // Find missing number
  let length = row * col
  for (let i = 1; i <= length; i++) {
    if (!map.has(i)) {
      result[1] = i
      break
    }
  }

  return result
}

// --------------------------
// SOLUTION 2

// TIP: Since the numbers are in the range [1, n2], we can use an array to count the frequency of each number.

function findMissingAndRepeatedValues2(grid) {
  let length = grid.length
  let count = new Array(length * length + 1).fill(0)

  // Count the frequency of each number
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      count[grid[i][j]]++
    }
  }

  let repeated = -1
  let missing = -1
  let numsLength = length * length

  // Find repeated and missing numbers
  for (let i = 1; i <= numsLength; i++) {
    if (count[i] === 2) repeated = i
    if (count[i] === 0) missing = i

    // If both repeated and missing numbers are found, return them
    if (repeated !== -1 && missing !== -1) return [repeated, missing]
  }

  return [repeated, missing]
}

// --------------------------
// TESTS

// 1
console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
) // [2, 4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4]

// 2
console.log(
  findMissingAndRepeatedValues2([
    [1, 3],
    [2, 2],
  ])
) // [2, 4]
