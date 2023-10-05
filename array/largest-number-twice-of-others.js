/*
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
*/

function dominantIndex(nums) {
  let sorted = [...nums].sort((a, b) => b - a)

  if (sorted[0] >= sorted[1] * 2) return nums.indexOf(sorted[0])
  return -1
}

console.log(dominantIndex([3, 6, 1, 0])) // 1
console.log(dominantIndex([1, 2, 3, 4])) // -1
console.log(dominantIndex([1, 0])) // 0
