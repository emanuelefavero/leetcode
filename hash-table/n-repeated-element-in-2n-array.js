// * N-Repeated Element in Size 2N Array

/*
You are given an integer array nums with the following properties:

- nums.length == 2 * n.
- nums contains n + 1 unique elements.
- Exactly one element of nums is repeated n times.

Return the element that is repeated n times.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(n) space
function repeatedNTimes(nums) {
  const n = nums.length / 2
  const map = new Map()

  for (const num of nums) {
    if (map.has(num)) {
      const value = map.get(num)
      map.set(num, value + 1)

      if (value === n) return num
    } else {
      map.set(num, 1)
    }
  }

  for (const [key, value] of map) {
    if (value === n) return key
  }
}

// -----------------------------
// SOLUTION

// TIP: Since there is only one element that is repeated n times, we can check if the current element is equal to the next 3 elements.

// O(n) time | O(1) space
function repeatedNTimes2(nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    if (
      nums[i] == nums[i + 1] ||
      nums[i] == nums[i + 2] ||
      nums[i] == nums[i + 3]
    )
      return nums[i]
  }
}

// -----------------------------
// TESTS

// 1
console.log(repeatedNTimes([1, 2, 3, 3])) // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])) // 2

// 2
console.log(repeatedNTimes2([1, 2, 3, 3])) // 3
console.log(repeatedNTimes2([2, 1, 2, 5, 3, 2])) // 2
