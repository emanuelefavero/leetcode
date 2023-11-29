// * Kth Largest Element in a Stream

/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
*/

// TIP: This is a brute force solution. The optimal solution uses a min heap. (@see https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions)

/**
 * @typedef {Object} KthLargest
 * @property {number} k
 * @property {number[]} nums
 */

class KthLargest {
  constructor(k, nums) {
    this.k = k
    this.nums = nums
  }

  /**
   * @param {number} val
   * @returns {number}
   */

  // O(n log n) time | O(n) space
  add(val) {
    this.nums.push(val)
    return this.nums.sort((a, b) => b - a)[this.k - 1]
  }
}

// -----------------------------
// TESTS

// 1
let kthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.add(3)) // 4
console.log(kthLargest.add(5)) // 5, since [2,4,5,5,8] is the stream at this point
