// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. (in-place)

function moveZeroes(nums) {
  numberOfZeroes = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      numberOfZeroes++
    }
  }

  for (let i = 0; i < numberOfZeroes; i++) {
    nums.push(0)
  }
}

let nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)
