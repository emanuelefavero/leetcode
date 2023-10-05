/*
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
*/

function dominantIndex(nums) {
  let max = -Infinity
  let maxIndex = -1
  let secondMax = -Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
      maxIndex = i
    } else if (nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }

  if (max >= secondMax * 2) return maxIndex
  return -1
}

console.log(dominantIndex([3, 6, 1, 0])) // 1
console.log(dominantIndex([1, 2, 3, 4])) // -1
console.log(dominantIndex([1, 0])) // 0
