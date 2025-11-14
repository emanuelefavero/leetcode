// * Binary Search Tree Iterator

/*
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
int next() Moves the pointer to the right, then returns the number at the pointer.
Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.
*/

class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */

  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

class BSTIterator {
  /**
   * @param {number} root
   */

  constructor(root) {
    if (!root) {
      this.data = []
      return
    }

    const visited = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(root)

    this.data = visited.reverse() // we reverse the array because we are using pop() which is more efficient than shift()
  }

  /**
   * @returns {number}
   */

  next() {
    return this.data.pop()
  }

  /**
   * @returns {boolean}
   */

  hasNext() {
    return this.data.length > 0
  }
}

// -----------------------------
// TESTS

const root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

const obj = new BSTIterator(root)

console.log(obj.next()) // 1
console.log(obj.next()) // 2
console.log(obj.hasNext()) // true, because there is still a 3
