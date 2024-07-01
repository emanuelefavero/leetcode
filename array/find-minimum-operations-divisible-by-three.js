// * Find Minimum Operations to Make All Elements Divisible by Three

// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.

function minimumOperations(nums) {
  let count = 0

  for (let num of nums) {
    if (num % 3 !== 0) count++
  }

  return count
}

// -------------------------
// TESTS

console.log(minimumOperations([1, 2, 3, 4])) // 3
console.log(minimumOperations([3, 6, 9])) // 0
