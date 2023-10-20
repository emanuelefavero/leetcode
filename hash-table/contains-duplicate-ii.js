// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k

// TODO: Commit solution 1
// TODO: jsDoc
// TODO: link to README

function containsNearbyDuplicate(nums, k) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // if the map has the current number and the difference between the current index and the index of the current number is less than or equal to k, return true
    if (i - map.get(nums[i]) <= k) return true
    else map.set(nums[i], i)
  }

  return false
}

// -----------------------------
// TESTS

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false
console.log(
  containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1)
) // true
