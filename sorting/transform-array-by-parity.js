// * Transform Array by Parity

/*
You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:

1. Replace each even number with 0.
2. Replace each odd numbers with 1.
3. Sort the modified array in non-decreasing order.

Return the resulting array after performing these operations.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(n) space
function transformArray(nums) {
  let even = []
  let odd = []

  for (let num of nums) {
    if (num % 2 === 0) even.push(0)
    else odd.push(1)
  }

  return [...even, ...odd]
}

// -----------------------
// SOLUTION 2

// O(n log n) time | O(1) space
function transformArray2(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) nums[i] = 0
    else nums[i] = 1
  }

  return nums.sort((a, b) => a - b)
}

// -----------------------
// SOLUTION 3

// TIP: This is a one liner solution

function transformArray3(nums) {
  return nums.map((num) => (num % 2 === 0 ? 0 : 1)).sort((a, b) => a - b)
}

// -----------------------
// SOLUTION 4

// TIP: This solution is similar to the first one but counts the number of even and odd numbers and then creates the array

// O(n) time | O(n) space
function transformArray4(nums) {
  let countEven = 0
  let countOdd = 0

  for (let num of nums) {
    if (num % 2 === 0) countEven++
    else countOdd++
  }

  return [...Array(countEven).fill(0), ...Array(countOdd).fill(1)]
}

// -----------------------
// TESTS

// 1
console.log(transformArray([4, 3, 2, 1])) //  [0,0,1,1]
/*
Explanation:
- Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with 1. Now, nums = [0, 1, 0, 1].
- After sorting nums in non-descending order, nums = [0, 0, 1, 1].
*/

// 2
console.log(transformArray2([4, 3, 2, 1])) //  [0,0,1,1]

// 3
console.log(transformArray3([4, 3, 2, 1])) //  [0,0,1,1]

// 4
console.log(transformArray4([4, 3, 2, 1])) //  [0,0,1,1]
