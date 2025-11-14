// * Largest Rectangle in Histogram

// Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @returns {number}
 */

// O(n) time - O(n) space
function largestRectangleArea(heights) {
  let maxArea = 0
  const stack = []

  for (let i = 0; i < heights.length; i++) {
    // if the current bar is shorter than the previous bar, pop the previous bar off the stack
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      // calculate the area of the rectangle with the height of the popped bar
      const height = heights[stack.pop()]
      const width = i - (stack.length ? stack[stack.length - 1] : -1) - 1
      maxArea = Math.max(maxArea, height * width)
    }

    stack.push(i)
  }

  // calculate the area of the remaining bars in the stack
  while (stack.length) {
    const height = heights[stack.pop()]
    const width =
      heights.length - (stack.length ? stack[stack.length - 1] : -1) - 1
    maxArea = Math.max(maxArea, height * width)
  }

  return maxArea
}

// -----------------------------
// TESTS

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
console.log(largestRectangleArea([2, 4])) // 4
