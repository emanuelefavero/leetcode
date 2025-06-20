// * Smallest Index With Digit Sum Equal to Index

// You are given an integer array nums.

// Return the smallest index i such that the sum of the digits of nums[i] is equal to i.

// If no such index exists, return -1.

function smallestIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let digits = nums[i].toString().split('')
    let sum = digits.reduce((acc, digit) => acc + Number(digit), 0)

    if (sum === i) return sum
  }

  return -1
}

// -------------------------
// TESTS

// 1
console.log(smallestIndex([1, 3, 2])) // 2
// Explanation: For nums[2] = 2, the sum of digits is 2, which is equal to index i = 2. Thus, the output is 2.
console.log(smallestIndex([1, 10, 11])) // 1
console.log(smallestIndex([1, 2, 3])) // -1
