// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// TIP: This solution is easy to understand but is not very efficient memory-wise

// O(n log n) time | O(n) space
function thirdMax(nums) {
  nums.sort((a, b) => a - b) // sort nums

  // remove duplicates
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  let result = [...set] // convert set to array

  // return third max if it exists, otherwise return max
  if (result.length >= 3) return result[result.length - 3]
  else return result[result.length - 1]
}

let nums = [3, 1, 2, 2, 4, 6, 5]
console.log(thirdMax(nums)) // 4
