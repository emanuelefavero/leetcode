// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k

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
// SOLUTION 2

// TIP: This solution is more memory efficient but slower

// TODO: jsDoc

function containsNearbyDuplicate2(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length && j - i <= k; j++) {
      if (nums[i] === nums[j]) return true
    }
  }

  return false
}

// -----------------------------
// TESTS

// Solution 1
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false
console.log(
  containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1)
) // true

// Solution 2
console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate2([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate2([1, 2, 3, 1, 2, 3], 2)) // false
console.log(
  containsNearbyDuplicate2([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1)
) // true
