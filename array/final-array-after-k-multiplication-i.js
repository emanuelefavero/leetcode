// * Final Array State After K Multiplication Operations I

/*
You are given an integer array nums, an integer k, and an integer multiplier.

You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.
Return an integer array denoting the final state of nums after performing all k operations.
*/

function getFinalState(nums, k, multiplier) {
  while (k > 0) {
    // Find minimum value in nums
    let min = Infinity
    for (let num of nums) {
      if (num < min) min = num
    }

    // Replace minimum value with min * multiplier
    nums[nums.indexOf(min)] = min * multiplier
    k--
  }

  return nums
}

// -------------------------
// TESTS

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2)) // [8,4,6,5,6]
/*
Explanation:

Operation	Result
After operation 1	[2, 2, 3, 5, 6]
After operation 2	[4, 2, 3, 5, 6]
After operation 3	[4, 4, 3, 5, 6]
After operation 4	[4, 4, 6, 5, 6]
After operation 5	[8, 4, 6, 5, 6]
*/
