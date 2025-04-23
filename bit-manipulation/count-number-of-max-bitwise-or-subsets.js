// * Count Number of Maximum Bitwise-OR Subsets

/*
Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different.

The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).
*/

function countMaxOrSubsets(nums) {
  let maxOR = 0

  // Compute the maximum OR
  for (let num of nums) {
    maxOR |= num
  }

  // Backtrack to count subsets
  let count = 0
  const backtrack = (index, currentOR) => {
    if (currentOR === maxOR) count++

    for (let i = index; i < nums.length; i++) {
      backtrack(i + 1, currentOR | nums[i])
    }
  }

  backtrack(0, 0)

  return count
}

// ----------------------
// TESTS

console.log(countMaxOrSubsets([3, 1])) // 2
/*
Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1]
*/
console.log(countMaxOrSubsets([2, 2, 2])) // 7
// Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 23 - 1 = 7 total subsets.
