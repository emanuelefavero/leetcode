// * Maximum Number of Pairs in Array

/*
You are given a 0-indexed integer array nums. In one operation, you may do the following:

- Choose two integers in nums that are equal.
- Remove both integers from nums, forming a pair.

The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(n) space
function numberOfPairs(nums) {
  let map = new Map()

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // Count the pairs in map
  let pairs = 0
  for (let [_, value] of map) {
    pairs += Math.floor(value / 2) // get the integer part of the division
  }

  // Count the leftover integers
  let leftover = nums.length - pairs * 2

  return [pairs, leftover]
}

// -----------------------------
// SOLUTION 2

// TIP: Sort the array to make it easier to form pairs

// O(n log n) time | O(1) space
function numberOfPairs2(nums) {
  nums.sort((a, b) => a - b)

  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.shift()
      nums.shift()
      count++
      i-- // adjust the index to check the next pair
    }
  }

  return [count, nums.length]
}

// -----------------------------
// TESTS

// 1
console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])) // [3, 1]
/*
Explanation:
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
*/

// 2
console.log(numberOfPairs2([1, 3, 2, 1, 3, 2, 2])) // [3, 1]
