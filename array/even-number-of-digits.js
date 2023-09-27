/**
 * * Given an array nums of integers, return how many of them contain an even number of digits
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(1) space
function findNumbers(nums) {
  let count = 0

  for (let num of nums) {
    // if the length of the number is even, increment count
    if (String(num).length % 2 === 0) count++
  }

  return count
}

console.log(findNumbers([22, 1, 234, 33])) // 2
