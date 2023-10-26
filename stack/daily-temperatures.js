/**
 * * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead
 *
 * @param {number[]} temperatures
 * @returns {number[]}
 */

// TIP: This solution uses a stack to keep track of the indices of the temperatures

// O(n) time | O(n) space
function dailyTemperatures(temperatures) {
  let stack = []
  let result = new Array(temperatures.length).fill(0) // initialize the result array with the length of the temperatures array and fill it with 0s

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let index = stack.pop() // get the index of the popped element
      result[index] = i - index // calculate the difference between the indices
    }

    stack.push(i) // push the current index
  }

  return result
}

// --------------------------
// TESTS

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])) // [1, 1, 1, 0]

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// [1 ,1 ,4 ,2 ,1 ,1 ,0 ,0]
