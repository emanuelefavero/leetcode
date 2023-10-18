/**
 * * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct
 *
 * @param {number[]} nums
 * @returns {boolean}
 */

function containsDuplicate(nums) {
  let set = new Set()

  for (let num of nums) {
    if (set.has(num)) return true
    else set.add(num)
  }

  return false
}

// -----------------------------
// TESTS

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
