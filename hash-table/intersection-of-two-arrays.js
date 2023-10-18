// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

function intersection(nums1, nums2) {
  let set = new Set(nums1)
  let result = new Set()

  for (let num of nums2) {
    if (set.has(num)) {
      result.add(num)
    }
  }

  return [...result]
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
