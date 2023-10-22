// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:
// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

function fourSumCount(nums1, nums2, nums3, nums4) {
  let map = new Map()
  let count = 0

  for (let num1 of nums1) {
    for (let num2 of nums2) {
      let sum = num1 + num2

      if (map.has(sum)) map.set(sum, map.get(sum) + 1)
      else map.set(sum, 1)
    }
  }

  for (let num3 of nums3) {
    for (let num4 of nums4) {
      let sum = -(num3 + num4) // The minus sign is because we're looking for the negative of the sum

      if (map.has(sum)) count += map.get(sum)
    }
  }

  return count
}

// -----------------------------
// TESTS

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])) // 2
// Explanation: The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
