// * Minimum Number Game

/*
You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
Now, first Bob will append the removed element in the array arr, and then Alice does the same.
The game continues until nums becomes empty.
Return the resulting array arr.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// TIP: This solution uses sorting to solve the problem

// O(n log n) time | O(n) space
function numberGame(nums) {
  let result = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 1; i += 2) {
    result.push(nums[i + 1])
    result.push(nums[i])
  }

  return result
}

// -----------------------
// SOLUTION 2

// TIP: This solution does not use sorting and it's not more efficient than the first solution

// O(n^2) time | O(n) space
function numberGame2(nums) {
  let result = []

  let bobMin = 0
  let aliceMin = 0

  while (nums.length) {
    // find and remove the minimum numbers from the array for both players
    aliceMin = Math.min(...nums)
    nums.splice(nums.indexOf(aliceMin), 1)
    bobMin = Math.min(...nums)
    nums.splice(nums.indexOf(bobMin), 1)

    // append the minimum numbers to the result array
    result.push(bobMin)
    result.push(aliceMin)
  }

  return result
}

// -----------------------
// TESTS

// 1
console.log(numberGame([5, 4, 2, 3])) // [3, 2, 5, 4]
/*
In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
At the beginning of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].
*/

// 2
console.log(numberGame2([5, 4, 2, 3])) // [3, 2, 5, 4]
