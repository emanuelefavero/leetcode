// * Find the XOR of Numbers Which Appear Twice

// You are given an array nums, where each number in the array appears either once or twice.

// Return the bitwise XOR of all the numbers that appear twice in the array, or 0 if no number appears twice.

function duplicateNumbersXOR(nums) {
  let map = new Map()
  let result = []

  for (let num of nums) {
    if (map.has(num)) {
      result.push(num)
    } else {
      map.set(num, true)
    }
  }

  if (!result.length) return 0
  return result.reduce((acc, num) => acc ^ num, 0)
}

// -----------------------------
// TESTS

console.log(duplicateNumbersXOR([1, 2, 1, 3])) // 1
// Explanation: The only number that appears twice in nums is 1.

console.log(duplicateNumbersXOR([1, 2, 3])) // 0
// Explanation: No number appears twice in nums.

console.log(duplicateNumbersXOR([1, 2, 2, 1])) // 3
// Explanation: Numbers 1 and 2 appeared twice. 1 XOR 2 == 3.
