// * Divide Array Into Equal Pairs

/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

- Each element belongs to exactly one pair.
- The elements present in a pair are equal.

Return true if nums can be divided into n pairs, otherwise return false.
*/

function divideArray(nums) {
  let map = new Map()

  // Populate the map with counts of each number
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // Check if any num occurrence is odd, if so, return false
  for (const [_, value] of map) {
    if (value % 2 !== 0) return false
  }

  // Get the sum of num occurrences
  let sum = 0
  for (const [_, value] of map) {
    sum += value
  }

  // Check if sum can be divided by n equally
  let n = nums.length / 2
  return sum % n === 0
}

// -------------------------
// TESTS

console.log(divideArray([3, 2, 3, 2, 2, 2])) // true
/* Explanation:
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
*/
console.log(divideArray([1, 2, 3, 4])) // false
