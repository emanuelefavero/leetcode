// * Product of Array Except Self

/*
Given an integer array nums, return an array result such that result[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1)

  // Calculate left products
  let product = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = product
    product *= nums[i] // Update product to include current number
  }

  // Calculate right products
  product = 1 // Reset product for right side calculation
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product
    product *= nums[i]
  }

  return result
}

// -------------------------
// TESTS

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]
