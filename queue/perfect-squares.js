// Given an integer n, return the least number of perfect square numbers that sum to n

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not

/*
EXAMPLE 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

EXAMPLE 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9
*/

// TODO: Add solution
// TODO: Add link to README
// TODO: Add jsDoc

function numSquares(n) {
  const queue = [n]
  const visited = new Set()

  let counter = 0

  while (queue.length > 0) {
    const queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift()

      if (current === 0) return counter

      for (let j = 1; j * j <= current; j++) {
        const next = current - j * j

        if (!visited.has(next)) {
          queue.push(next)
          visited.add(next)
        }
      }
    }

    counter++
  }

  return -1
}

// --------------------------
// TESTS

console.log(numSquares(12)) // 3, 12 = 4 + 4 + 4
console.log(numSquares(13)) // 2, 13 = 4 + 9
