// * Minimum Operations to Make the Array Increasing

/*
You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
Return the minimum number of operations needed to make nums strictly increasing.

An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.
*/

function minOperations(nums) {
  if (nums.length < 2) return 0

  let count = 0

  for (let i = 1; i < nums.length; i++) {
    // If the current number is less than or equal to the previous number
    if (nums[i] <= nums[i - 1]) {
      // Incrementing count: To make the array strictly increasing, the current element needs to be larger than the previous element. The solution calculates the difference between the previous element and the current element and adds 1 to this difference. This value is then added to count, representing the number of operations needed to adjust the current element
      count += nums[i - 1] - nums[i] + 1

      // Adjusting the Current Element: After incrementing count, the current element (nums[i]) is set to the previous element plus 1 (nums[i - 1] + 1). This adjustment ensures that the array becomes strictly increasing up to the current element.
      nums[i] = nums[i - 1] + 1
    }
  }

  return count
}

// -----------------------------
// TESTS

console.log(minOperations([1, 1, 1])) // 3
/*
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].
*/

console.log(minOperations([1, 5, 2, 4, 1])) // 14
