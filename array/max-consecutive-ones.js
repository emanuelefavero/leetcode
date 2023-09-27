function findMaxConsecutiveOnes(nums) {
  let currentSum = 0
  let maxSum = 0

  for (let n of nums) {
    if (n === 1) {
      currentSum++
    } else {
      maxSum = Math.max(maxSum, currentSum)
      currentSum = 0
    }
  }

  maxSum = Math.max(maxSum, currentSum)

  return maxSum
}

// -------------------------------
// SOLUTION 2
function findMaxConsecutiveOnes2(nums) {
  let result = []
  let consecutiveOnes = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      result.push(consecutiveOnes)
      consecutiveOnes = 0
    } else {
      consecutiveOnes++
    }
  }

  if (nums[nums.length - 1] === 1) result.push(consecutiveOnes)

  return Math.max(...result)
}

// -------------------------------

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 0])) // 2
console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 0])) // 2
