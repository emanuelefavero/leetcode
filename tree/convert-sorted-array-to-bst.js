// * Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree

class TreeNode {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// TIP: To convert a sorted array to a BST, we just need to do a binary search on the array and insert the middle element asd the root node

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @returns {TreeNode}
 */

// O(n) time | O(n) space
function sortedArrayToBST(nums, start = 0, end = nums.length - 1) {
  if (start > end) return null

  let middle = Math.floor((start + end) / 2)
  let root = new TreeNode(nums[middle])

  root.left = sortedArrayToBST(nums, start, middle - 1)
  root.right = sortedArrayToBST(nums, middle + 1, end)

  return root
}

// --------------------------
// TESTS

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])) // [0,-3,9,-10,null,5]
