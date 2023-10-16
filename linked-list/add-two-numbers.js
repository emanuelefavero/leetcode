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

function addTwoNumbers(l1, l2) {
  let num1 = []
  let num2 = []

  while (l1) {
    num1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    num2.push(l2.val)
    l2 = l2.next
  }

  let reversedNum1 = Number(num1.reverse().join(''))
  let reversedNum2 = Number(num2.reverse().join(''))

  let sum = (reversedNum1 + reversedNum2).toString()

  let result = null

  for (let i = 0; i < sum.length; i++) {
    let newNode = new ListNode(sum[i])
    newNode.next = result
    result = newNode
  }

  return result
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2)) // 708
