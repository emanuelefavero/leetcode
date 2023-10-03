// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

function sortArrayByParity(nums) {
  let even = []
  let odd = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(nums[i])
    else odd.push(nums[i])
  }

  return [...even, ...odd]
}

console.log(sortArrayByParity([3, 1, 2, 4])) // [2, 4, 3, 1]
