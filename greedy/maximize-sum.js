// * Maximum Sum With Exactly K Elements

/*
You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

  Select an element m from nums.
  Remove the selected element m from the array.
  Add a new element with a value of m + 1 to the array.
  Increase your score by m.
  
Return the maximum score you can achieve after performing the operation exactly k times.
*/

function maximizeSum(nums, k) {
  nums.sort((a, b) => a - b)

  let sum = 0
  let largest = nums[nums.length - 1]

  for (let i = 0; i < k; i++) {
    sum += largest
    largest++
  }

  return sum
}

// -----------------------------
// SOLUTION 2

function maximizeSum2(nums, k) {
  let max = Math.max(...nums)

  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += max
    max++
  }

  return sum
}

// -----------------------------
// TESTS

// 1
console.log(maximizeSum([1, 2, 3, 4, 5], 3)) // 18
/*
Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
So, we will return 18.
It can be proven, that 18 is the maximum answer that we can achieve.
*/

// 2
console.log(maximizeSum2([1, 2, 3, 4, 5], 3)) // 18
