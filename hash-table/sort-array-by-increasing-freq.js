// * Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n log n) time  | O(n) space
function frequencySort(nums) {
  let map = new Map()

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return b - a
    }

    return map.get(a) - map.get(b)
  })

  return nums
}

// -----------------------------
// TESTS

console.log(frequencySort([1, 1, 2, 2, 2, 3])) // [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
console.log(frequencySort([2, 3, 1, 3, 2])) // [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
