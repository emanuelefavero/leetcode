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

// -------------------------
// SOLUTION 2

// TIP: This solution is faster time-wise
function sortArrayByParity2(nums) {
  let result = []

  for (let num of nums) {
    if (num % 2 === 0) result.unshift(num) // add to the beginning
    else result.push(num)
  }

  return result
}

// -------------------------
// TESTS

console.log(sortArrayByParity([3, 1, 2, 4])) // [2, 4, 3, 1]
console.log(sortArrayByParity2([3, 1, 2, 4])) // [4, 2, 3, 1] - still correct
