// * Merge Nodes in Between Zeros

/*
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

function mergeNodes(head) {
  let dummy = new ListNode()
  let current = dummy
  head = head.next
  let sum = 0

  while (head !== null) {
    if (head.val === 0) {
      current.next = new ListNode(sum)
      current = current.next
      sum = 0
    }

    sum += head.val
    head = head.next
  }

  return dummy.next
}

// -----------------------------
// TESTS

let values = [0, 3, 1, 0, 4, 5, 2, 0]

function populateLinkedList(values) {
  let head = new ListNode()
  let current = head

  for (let val of values) {
    current.next = new ListNode(val)
    current = current.next
  }

  return head.next
}

let head = populateLinkedList(values)

console.log(mergeNodes(head)) // [4, 11]
/*
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.
*/
