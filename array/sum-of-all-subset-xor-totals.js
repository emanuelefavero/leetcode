// * Sum of All Subset XOR Totals

/*
The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums. 

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.
*/

/*
TIP:
Iterate over each number in the list nums.
Use the bitwise OR operator (|=) to combine each number with sumTotal. This step ensures that sumTotal will contain all the bits set that are set in any of the numbers in the list.
Once the iteration is complete, left shift sumTotal by (len(nums) - 1) positions. This operation multiplies sumTotal by 2 ^ (len(nums)−1).
The final value of sumTotal after the left shift is returned as the result.
TIP: The bitwise OR operator (|) is used to set a bit to 1 if it is 1 in either operand. The bitwise left shift operator (<<) is used to shift the bits of the first operand to the left by the number of places specified in the second operand
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(1) space
function subsetXORSum(nums) {
  let sum = 0

  for (let num of nums) {
    sum |= num // | is bitwise OR
  }

  return sum << (nums.length - 1) // << is bitwise left shift
}

// -------------------------
// TESTS

console.log(subsetXORSum([1, 3]))
