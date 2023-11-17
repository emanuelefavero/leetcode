/**
 * @typedef {Object} ListNode
 */

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * * Merge Two Sorted Lists
 *
 * Given two sorted linked lists, merge them in order. Return the merged list
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode}
 */

// TIP: You can find the same solution in linked-list/merge-two-sorted-lists.js
// TIP: This solution uses recursion

// O(n + m) time | O(n + m) space
function mergeTwoLists(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses iteration
// TIP: In my opinion this solution is easier to understand

// O(n + m) time | O(1) space
function mergeTwoLists2(list1, list2) {
  let head = new ListNode()
  let current = head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current.next
  }

  // add possible remaining nodes
  current.next = list1 || list2 || null

  return head.next // ? head.next because head is a dummy node
}

// -----------------------------
// TESTS

let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

// NOTE: Run one solution at a time
// console.log(mergeTwoLists(list1, list2)) // 1 -> 1 -> 2 -> 3 -> 4 -> 4
console.log(mergeTwoLists2(list1, list2)) // 1 -> 1 -> 2 -> 3 -> 4 -> 4
