// * Maximum Product of Two Elements in an Array

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1)

function maxProduct(nums) {
  nums.sort((a, b) => a - b)

  let i = nums[nums.length - 1]
  let j = nums[nums.length - 2]

  return (i - 1) * (j - 1)
}

console.log(maxProduct([3, 4, 5, 2])) // 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12
