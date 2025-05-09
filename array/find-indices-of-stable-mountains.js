// * Find Indices of Stable Mountains

/*
There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.

A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.

Return an array containing the indices of all stable mountains in any order.
*/

/**
 * @param {number[]} height
 * @param {number} threshold
 * @returns {number[]}
 */

// O(n) time | O(n) space
function stableMountains(height, threshold) {
  let result = []

  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) result.push(i)
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This solution checks the current mountain and pushes the next mountain index. Either solutions are valid.

function stableMountains2(height, threshold) {
  let result = []

  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] > threshold) result.push(i + 1)
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(stableMountains([1, 2, 3, 4, 5], 2)) // [3, 4]
/*
Explanation:

Mountain 3 is stable because height[2] == 3 is greater than threshold == 2.
Mountain 4 is stable because height[3] == 4 is greater than threshold == 2.
*/

// 2
console.log(stableMountains([1, 2, 3, 4, 5], 2)) // [3, 4]
