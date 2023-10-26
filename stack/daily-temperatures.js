// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead

function dailyTemperatures(temperatures) {
  let stack = []
  let result = []

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let top = stack.pop() // pop and get the index of the top element
      result[top] = i - top // calculate the difference between the indices
    }

    stack.push(i)

    result[i] = 0
  }

  return result
}

// --------------------------
// TESTS

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])) // [1, 1, 1, 0]
