class ListNode {
  constructor(val, next) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

function middleNode(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

// -----------------------------

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

console.log(middleNode(head)) // 3 is the middle node
