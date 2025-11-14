// * Delete Greatest Value in Each Row

/*
You are given an m x n matrix grid consisting of positive integers.

Perform the following operation until grid becomes empty:

Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
Add the maximum of deleted elements to the answer.
Note that the number of columns decreases by one after each operation.

Return the answer after performing the operations described above.
*/

/**
 * @param {number[][]} grid
 * @returns {number}
 */

// O(n log n) time | O(1) space
function deleteGreatestValue(grid) {
  let sum = 0
  let index = 0

  // Sort each row in descending order
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => b - a)
  }

  // Get the max value from each column
  while (index < grid[0].length) {
    let max = -Infinity

    for (let i = 0; i < grid.length; i++) {
      max = Math.max(max, grid[i][index])
    }

    index++
    sum += max
  }

  return sum
}

// --------------------------
// SOLUTION 2

function deleteGreatestValue2(grid) {
  grid.forEach((row) => row.sort((a, b) => b - a)) // sort descending
  let sum = 0

  while (grid[0].length) {
    const column = []

    // Remove the first element from each row and add it to the column
    for (const row of grid) column.push(row.shift())

    sum += Math.max(...column) // get the max value from the column
  }

  return sum
}

// --------------------------
// TESTS

// 1
console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
) // 8
/*
Example:
1  2 (4) => 1 (2) => (1)
3 (3) 1 => (3) 1  => (1)

Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
- In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
- In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
The final answer = 4 + 3 + 1 = 8.
*/

// 2
console.log(
  deleteGreatestValue2([
    [1, 2, 4],
    [3, 3, 1],
  ])
) // 8
