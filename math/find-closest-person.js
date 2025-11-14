// * Find Closest Person

/*
You are given three integers x, y, and z, representing the positions of three people on a number line:

- x is the position of Person 1.
- y is the position of Person 2.
- z is the position of Person 3, who does not move.

Both Person 1 and Person 2 move toward Person 3 at the same speed.

Determine which person reaches Person 3 first:

- Return 1 if Person 1 arrives first.
- Return 2 if Person 2 arrives first.
- Return 0 if both arrive at the same time.

Return the result accordingly.
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
 */

// O(1) time | O(1) space
function findClosest(x, y, z) {
  const xDiff = Math.abs(x - z)
  const yDiff = Math.abs(y - z)
  if (xDiff < yDiff) return 1
  if (xDiff > yDiff) return 2
  else return 0
}

// -------------------------
// SOLUTION 2

function findClosest2(x, y, z) {
  if (Math.abs(z - x) < Math.abs(z - y)) return 1
  if (Math.abs(z - x) > Math.abs(z - y)) return 2
  return 0
}

// -------------------------
// TESTS

// 1
console.log(findClosest(2, 7, 4)) // 1
/* Explanation:
- Person 1 is at position 2 and can reach Person 3 (at position 4) in 2 steps.
- Person 2 is at position 7 and can reach Person 3 in 3 steps.
Since Person 1 reaches Person 3 first, the output is 1.
*/
console.log(findClosest(2, 5, 6)) // 2
console.log(findClosest(1, 5, 3)) // 0

// 2
console.log(findClosest2(2, 7, 4)) // 1
console.log(findClosest2(2, 5, 6)) // 2
console.log(findClosest2(1, 5, 3)) // 0
