// * Maximum Product of Two Elements in an Array

function maxProduct(nums) {
  nums.sort((a, b) => a - b)

  let i = nums[nums.length - 1]
  let j = nums[nums.length - 2]

  return (i - 1) * (j - 1)
}

console.log(maxProduct([3, 4, 5, 2])) // 12
