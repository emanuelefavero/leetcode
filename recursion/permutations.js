// * Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order

/**
 * @param {number[]} nums
 * @returns {number[][]}
 */

// O(n!) time (factorial) - O(n) space
function permute(nums) {
  let result = []

  backtrack(nums, [], result)

  return result
}

function backtrack(nums, current, result) {
  // base case - permutation is complete
  if (current.length === nums.length) {
    return result.push([...current])
  }

  // loop through the numbers
  for (let i = 0; i < nums.length; i++) {
    // skip if the number is already in the current permutation
    if (current.includes(nums[i])) continue

    // add the number to the current permutation
    current.push(nums[i])

    // recursively backtrack with the next number
    backtrack(nums, current, result)

    // remove the number from the current permutation
    current.pop()
  }
}

// -------------------------------------
// TESTS

console.log(permute([1, 2, 3]))
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
