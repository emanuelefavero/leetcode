// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

function thirdMax(nums) {
  nums.sort((a, b) => a - b)

  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  let result = [...set]

  if (result.length >= 3) return result[result.length - 3]
  else return result[result.length - 1]
}

let nums = [
  3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
  5, 6,
]
console.log(thirdMax(nums))
