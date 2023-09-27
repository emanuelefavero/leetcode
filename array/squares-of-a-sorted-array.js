// not in-place
function sortedSquares(nums) {
  let squares = []

  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i])
  }

  return squares.sort((a, b) => a - b)
}

// -------------------------------
// SOLUTION 2 - in-place

function sortedSquares2(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }

  return nums.sort((a, b) => a - b)
}

// -------------------------------
// TESTS

console.log(sortedSquares([-4, -1, 0, 3, 10]))
