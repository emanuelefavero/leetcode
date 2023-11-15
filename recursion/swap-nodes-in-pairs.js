class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function swapPairs(head) {
  if (!head || !head.next) return head

  let first = head
  let second = head.next

  // swap
  let temp = first.val
  first.val = second.val
  second.val = temp

  swapPairs(first.next.next)

  return head
}

// -----------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
console.log(swapPairs(head)) // 2 -> 1 -> 4 -> 3

let head2 = new ListNode(1)
console.log(swapPairs(head2)) // 1
