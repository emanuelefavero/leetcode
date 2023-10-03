// TODO: Add jsDoc and clean up comments

/*
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i]

// TIP: To solve this problem, you can copy the heights array and sort it. Then, compare the two arrays and count the number of differences.
*/

function heightChecker(heights) {
  let expected = [...heights].sort((a, b) => a - b) // sort heights
  let result = 0

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) result++
  }

  return result
}

// -------------------------
// TESTS

let heights = [1, 1, 4, 2, 1, 3]
console.log(heightChecker(heights)) // 3
