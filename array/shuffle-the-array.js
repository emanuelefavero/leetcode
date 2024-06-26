// * Shuffle the Array

/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @returns {number[]}
 */

// O(n) time | O(n) space
export function shuffle(nums, n) {
  let left = 0
  let right = n
  let result = []

  while (right < nums.length) {
    result.push(nums[left])
    result.push(nums[right])
    left++
    right++
  }

  return result
}

// -------------------------
// SOLUTION 2

// O(n) time | O(n) space
function shuffle2(nums, n) {
  let result = []

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n])
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(shuffle([2, 5, 1, 3, 4, 7], 3)) // [2, 3, 5, 4, 1, 7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// 2
console.log(shuffle2([2, 5, 1, 3, 4, 7], 3)) // [2, 3, 5, 4, 1, 7]
