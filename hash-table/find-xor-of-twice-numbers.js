// * Find the XOR of Numbers Which Appear Twice

// You are given an array nums, where each number in the array appears either once or twice.

// Return the bitwise XOR of all the numbers that appear twice in the array, or 0 if no number appears twice.

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(n) space
function duplicateNumbersXOR(nums) {
  const map = new Map()
  const result = []

  for (const num of nums) {
    if (map.has(num)) {
      result.push(num)
    } else {
      map.set(num, true)
    }
  }

  return result.reduce((acc, num) => acc ^ num, 0)
}

// -----------------------------
// SOLUTION 2

function duplicateNumbersXOR2(nums) {
  let result = 0
  const set = new Set()

  for (const num of nums) {
    if (set.has(num)) {
      result ^= num
    } else {
      set.add(num)
    }
  }

  return result
}

// -----------------------------
// TESTS

// 1
console.log(duplicateNumbersXOR([1, 2, 1, 3])) // 1
// Explanation: The only number that appears twice in nums is 1.
console.log(duplicateNumbersXOR([1, 2, 3])) // 0
// Explanation: No number appears twice in nums.
console.log(duplicateNumbersXOR([1, 2, 2, 1])) // 3
// Explanation: Numbers 1 and 2 appeared twice. 1 XOR 2 == 3.

// 2
console.log(duplicateNumbersXOR2([1, 2, 1, 3])) // 1
console.log(duplicateNumbersXOR2([1, 2, 3])) // 0
console.log(duplicateNumbersXOR2([1, 2, 2, 1])) // 3
