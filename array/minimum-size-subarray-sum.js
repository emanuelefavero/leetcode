// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

/*
EXAMPLE:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

function minSubArrayLen(target, nums) {
  let minLength = Infinity

  nums.forEach((num, i) => {
    let sum = 0

    // Nested loop starting at the current index
    for (let j = i; j < nums.length; j++) {
      // Add the current number to the sum
      sum += nums[j]

      // If the sum is greater than or equal to the target, update minLength and break out of the loop
      if (sum >= target) {
        minLength = Math.min(minLength, j - i + 1) // j - i + 1 is the length of the subarray
        break
      }
    }
  })

  return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])) // [4, 3]
