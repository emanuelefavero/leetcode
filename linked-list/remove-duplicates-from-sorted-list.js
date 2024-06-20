// * Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well

class ListNode {
  constructor(val, next) {
    this.val = val || 0
    this.next = next || null
  }
}

function deleteDuplicates(head) {
  let current = head

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}

// -----------------------------
// TEST

const head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)

console.log(deleteDuplicates(head))

const head2 = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(1)

console.log(deleteDuplicates(head2))
