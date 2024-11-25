// * Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

function sumOfUnique(nums) {
  const map = new Map()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let sum = 0
  for (const [key, value] of map) {
    if (value === 1) sum += key
  }

  return sum
}

// -------------------------
// TESTS

console.log(sumOfUnique([1, 2, 3, 2])) // 4
// Explanation: The unique elements are [1,3], and the sum is 4.
console.log(sumOfUnique([1, 1, 1, 1, 1])) // 0
