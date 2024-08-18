// * Minimum Bit Flips to Convert Number

/*
A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
Given two integers start and goal, return the minimum number of bit flips to convert start to goal.
*/

/**
 * @param {number} start
 * @param {number} goal
 * @returns {number}
 */

// TIP: XOR (^) operator to find the difference between two numbers, then count the number of 1s in the result

// O(n) time | O(1) space
function minBitFlips(start, goal) {
  return (start ^ goal).toString(2).replace(/0/g, '').length
}

// ----------------------
// SOLUTION 2

function minBitFlips2(start, goal) {
  let count = 0
  let num1 = start.toString(2)
  let num2 = goal.toString(2)

  if (num1.length > num2.length) {
    num2 = num2.padStart(num1.length, '0')
  } else {
    num1 = num1.padStart(num2.length, '0')
  }

  for (let i = 0; i < num1.length; i++) {
    num1[i] !== num2[i] && count++
  }

  return count
}

// ----------------------
// TESTS

// 1
console.log(minBitFlips(10, 7)) // 3
/*
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
*/

// 2
console.log(minBitFlips2(10, 7)) // 3
