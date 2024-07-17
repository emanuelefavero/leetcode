// * XOR Operation in an Array

/*
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.
*/

function xorOperation(n, start) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i)
  }
  return arr.reduce((acc, curr) => acc ^ curr)
}

// ----------------------
// TESTS

console.log(xorOperation(5, 0)) // 8
console.log(xorOperation(4, 3)) // 8
/*
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.
*/
