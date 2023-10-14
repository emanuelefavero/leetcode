// TODO: link to README
// TODO: jsDoc

/**
 * @typedef {Object} ListNode
 * @property {*} val
 */

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function oddEvenList(head) {
  if (!head) return null

  // Use two pointers to keep track of odd and even nodes
  let odd = head // pointer to odd nodes
  let even = head.next // pointer to even nodes (starts at second node)
  let evenHead = even // pointer to head of even nodes (first even node)

  while (even && even.next) {
    // Adjust pointers to skip the next odd node and even node in the list
    odd.next = odd.next.next // skip next odd node
    even.next = even.next.next // skip next even node

    /*
      Explanation:
      - By doing odd.next = odd.next.next, we skip the next node
      - Let's say odd is pointing to node 1 and even is pointing to node 2. By doing odd.next = odd.next.next, we skip node 2 and point to node 3
      - After doing so for both odd and even, each will be pointing only to odd nodes and even nodes respectively. So we only need to connect the last odd node to the head of the even nodes

      1 -> 2 -> 3 -> 4 -> 5
      o    e    o    e    o
      o         e         o
      o              e
      o                   e
    */

    // Move pointers forward
    odd = odd.next
    even = even.next
  }

  // Connect the last odd node to the head of the even nodes
  odd.next = evenHead

  return head
}

// -----------------------------
// TESTS

// TIP: Helper function to get values from linked list
function getValues(head) {
  let values = []

  let current = head

  while (current) {
    values.push(current.val)
    current = current.next
  }

  return values
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

let oddEven = oddEvenList(head)
console.log(getValues(oddEven)) // [1, 3, 5, 2, 4]
