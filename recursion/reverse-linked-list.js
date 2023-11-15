// * Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

// -----------------------
// SOLUTION 2

// TIP: This solution uses recursion

// TODO: jsDoc

function reverseList2(head, prev = null) {
  if (!head) return prev

  let next = head.next
  head.next = prev

  // NOTE: We pass next as the new head, and head as the new prev, essentially moving down the list one node at a time
  return reverseList2(next, head)
}

// -----------------------
// TESTS

// 1
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
console.log(reverseList(head)) // 4 -> 3 -> 2 -> 1

// 2
let head2 = new ListNode(1)
head2.next = new ListNode(2)
head2.next.next = new ListNode(3)
head2.next.next.next = new ListNode(4)
console.log(reverseList2(head2)) // 4 -> 3 -> 2 -> 1
