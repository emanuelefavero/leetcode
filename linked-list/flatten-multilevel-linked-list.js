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

// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let current be a node with a child list. The nodes in the child list should appear after current and before current.next in the flattened list.

// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

/*
EXAMPLE:
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
*/

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
// TESTS

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.prev = list
list.next.next = new ListNode(3)
list.next.next.prev = list.next

list.next.child = new ListNode(7)
list.next.child.next = new ListNode(8)
list.next.child.next.prev = list.next.child

console.log(list) // 1 <-> 2 [7 <-> 8] <-> 3

function print(list) {
  let current = list
  while (current) {
    if (current.child) {
      let subCurrent = current.child
      while (subCurrent) {
        console.log(subCurrent.val)
        subCurrent = subCurrent.next
      }
    }

    console.log(current.val)

    current = current.next
  }
}

print(list) // 1 7 8 2 3
