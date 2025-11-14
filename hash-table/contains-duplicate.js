/**
 * * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct
 *
 * @param {number[]} nums
 * @returns {boolean}
 */

function containsDuplicate(nums) {
  const set = new Set()

  for (const num of nums) {
    if (set.has(num)) return true
    else set.add(num)
  }

  return false
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses the size of the set to determine if there are duplicates (if there are duplicates, the size of the set will be less than the length of the array)

// O(n) time | O(n) space
function containsDuplicate2(nums) {
  const set = new Set(nums)

  return set.size !== nums.length
}

// -----------------------------
// TESTS

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
