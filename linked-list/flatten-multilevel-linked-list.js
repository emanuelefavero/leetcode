/**
 * @typedef {Object} ListNode
 * @property {*} val
 * @property {ListNode} prev
 * @property {ListNode} next
 * @property {ListNode} child
 */

class ListNode {
  constructor(val, prev, next, child) {
    this.val = val
    this.prev = prev || null
    this.next = next || null
    this.child = child || null
  }
}

/**
 * * Flatten Multilevel Linked List (Doubly Linked List)
 * Given a doubly linked head, flatten the head so that all the nodes appear in a single-level, doubly linked head. Return the head of the flattened head
 *
 * @see https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/
 * @param {ListNode} head
 * @returns {ListNode}
 */

/*
EXAMPLE:
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked head in the input is shown.
*/

// TIP: This solution outputs a linked list (like the original problem)

function flatten(head) {
  let current = head

  while (current) {
    let current = head

    while (current) {
      if (!current.child) {
        current = current.next
        continue // skip to next iteration
      }

      let temp = current.child

      while (temp.next) {
        temp = temp.next
      }

      temp.next = current.next

      if (current.next) {
        current.next.prev = temp
      }

      current.next = current.child
      current.child.prev = current
      current.child = null
    }

    return head
  }
}

// -----------------------------
// SOLUTION 2

// TIP: This solution outputs an array instead of a linked list (it is more readable)

function flatten2(head) {
  let result = []

  let current = head
  while (current) {
    result.push(current.val)

    if (current.child) {
      let subCurrent = current.child

      while (subCurrent) {
        result.push(subCurrent.val)
        subCurrent = subCurrent.next
      }
    }

    current = current.next
  }

  return result
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.prev = head
head.next.next = new ListNode(3)
head.next.next.prev = head.next

head.next.child = new ListNode(7)
head.next.child.next = new ListNode(8)
head.next.child.next.prev = head.next.child

console.log(head) // 1 <-> 2 [7 <-> 8] <-> 3

function print(head) {
  let current = head
  while (current) {
    console.log(current.val)

    if (current.child) {
      let subCurrent = current.child
      while (subCurrent) {
        console.log(subCurrent.val)
        subCurrent = subCurrent.next
      }
    }

    current = current.next
  }
}

print(head) // 1 2 7 8 3

console.log(flatten(head)) // 1 2 7 8 3 as a linked list
console.log(flatten2(head)) // [ 1 2 7 8 3 ]
