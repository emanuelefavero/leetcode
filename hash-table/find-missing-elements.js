// * Find Missing Elements

/*
You are given an integer array nums consisting of unique integers.

Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.

The smallest and largest integers of the original range are still present in nums.

Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.
*/

function findMissingElements(nums) {
  nums.sort((a, b) => a - b)
  const length = nums.length
  const set = new Set()
  const smallest = nums[0]
  const largest = nums[length - 1]
  const result = []

  // Add all numbers to the set
  for (const num of nums) {
    set.add(num)
  }

  // Check for missing numbers in the range
  for (let i = smallest; i <= largest; i++) {
    if (!set.has(i)) result.push(i)
  }

  return result
}

// -----------------------------
// TESTS

console.log(findMissingElements([1, 4, 2, 5])) // [3]
console.log(findMissingElements([7, 8, 6, 9])) // []
