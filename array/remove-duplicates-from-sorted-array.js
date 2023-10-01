// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums

function removeDuplicates(nums) {
  let hashTable = {}

  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = true
    } else {
      nums.splice(i, 1)
      i-- // to account for the change in length when splicing
    }
  }

  return nums.length
}

// -------------------------
// TESTS

let nums = [1, 1, 2]
console.log(removeDuplicates(nums))
console.log(nums)
