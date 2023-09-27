function findMaxConsecutiveOnes(nums) {
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

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 0]))
