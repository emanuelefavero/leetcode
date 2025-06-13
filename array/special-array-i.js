// * Special Array I

// An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.

// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

function isArraySpecial(nums) {
  if (nums.length === 1) return true

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i]
    let prev = nums[i - 1]

    const isEven = (num) => num % 2 === 0

    // Check if the current and previous elements have different parity
    if (isEven(current)) {
      if (isEven(prev)) return false
    } else if (!isEven(current)) {
      if (!isEven(prev)) return false
    }
  }

  return true
}

// -------------------------
// TESTS

console.log(isArraySpecial([1])) // true
// Explanation: There is only one element. So the answer is true.
console.log(isArraySpecial([2, 1, 4])) // true
// Explanation: There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.
console.log(isArraySpecial([4, 3, 1, 6])) // false
