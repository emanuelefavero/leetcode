// * Number of Good Pairs

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function numIdenticalPairs(nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++
    }
  }
  return count
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses an hash table

function numIdenticalPairs2(nums) {
  let count = 0
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    // if the number is already in the hash table, add the value to the count
    if (hash[nums[i]]) {
      count += hash[nums[i]]
      hash[nums[i]]++
    } else {
      hash[nums[i]] = 1
    }
  }

  return count
}

// -----------------------------
// TESTS

// 1
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) // 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// 2
console.log(numIdenticalPairs2([1, 2, 3, 1, 1, 3])) // 4
