// * Merge Two Sorted Lists

//  Given two sorted linked lists, merge them in order. Return the merged list

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// TIP: You can find the same solution in linked-list/merge-two-sorted-lists.js
// TIP: This solution uses recursion

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
// TESTS

let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

console.log(mergeTwoLists(list1, list2)) // 1 -> 1 -> 2 -> 3 -> 4 -> 4
