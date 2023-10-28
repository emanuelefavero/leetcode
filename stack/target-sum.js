// * Target Sum

/*
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.
*/

// TIP: In this solution we use backtracking (depth-first search) to solve the problem

function findTargetSumWays(nums, target) {
  let count = 0 // count the number of ways we can reach the target

  function backtrack(index, sum) {
    // base case - when we reach the end of the array
    if (index === nums.length) {
      // if the sum is equal to the target, increment the count
      if (sum === target) count++
      return
    }

    backtrack(index + 1, sum + nums[index]) // add the current number
    backtrack(index + 1, sum - nums[index]) // subtract the current number
  }

  backtrack(0, 0) // start at the first index with a sum of 0

  return count
}

// --------------------------
// TESTS

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)) // 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3
