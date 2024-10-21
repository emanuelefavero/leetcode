// * Shuffle an Array

/*
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
*/

class Solution {
  /**
   * @param {number[]} nums
   */

  constructor(nums) {
    this.nums = nums
  }

  /**
   * @returns {number[]}
   */

  // O(1) time | O(1) space
  reset() {
    return this.nums
  }

  /**
   * @returns {number[]}
   */

  // O(n) time | O(n) space
  shuffle() {
    let shuffled = [...this.nums]

    for (let i = 0; i < shuffled.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = shuffled[i]
      shuffled[i] = shuffled[randomIndex]
      shuffled[randomIndex] = temp
    }

    return shuffled
  }
}

// -------------------------
// TESTS

let obj = new Solution([1, 2, 3])
let param_1 = obj.reset()
let param_2 = obj.shuffle()

console.log(param_1) // [1, 2, 3]
console.log(param_2) // [2, 1, 3]
