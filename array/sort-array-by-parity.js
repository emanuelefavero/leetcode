// TODO: jsDoc and comments

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
// SOLUTION 3

// TIP: This solution uses the two-pointer technique and is 99% faster than the other two solutions! (it is less readable though)

function sortArrayByParity3(nums) {
  let writePointer = 0

  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] % 2 === 0) {
      let temp = nums[writePointer]
      nums[writePointer] = nums[readPointer]
      nums[readPointer] = temp
      writePointer++
    }
  }

  return nums
}

// -------------------------
// TESTS

console.log(sortArrayByParity([3, 1, 2, 4])) // [2, 4, 3, 1]
console.log(sortArrayByParity2([3, 1, 2, 4])) // [4, 2, 3, 1] - still correct
console.log(sortArrayByParity3([3, 1, 2, 4])) // [2, 4, 3, 1]
