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

function findClosest(x, y, z) {
  let xDiff = Math.abs(x - z)
  let yDiff = Math.abs(y - z)
  if (xDiff < yDiff) return 1
  if (xDiff > yDiff) return 2
  else return 0
}

// -------------------------
// TESTS

console.log(findClosest(2, 7, 4)) // 1
/* Explanation:
- Person 1 is at position 2 and can reach Person 3 (at position 4) in 2 steps.
- Person 2 is at position 7 and can reach Person 3 in 3 steps.
Since Person 1 reaches Person 3 first, the output is 1.
*/
console.log(findClosest(2, 5, 6)) // 2
console.log(findClosest(1, 5, 3)) // 0
