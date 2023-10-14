// * Singly Linked List

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class MyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   *
   * @param {number} index
   * @returns {number}
   */

  get(index) {
    if (index >= this.length || !this.head) return -1
    if (index === 0) return this.head.val

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }

    return current.val
  }

  /**
   *
   * @param {number} val
   * @returns {void}
   */

  addAtHead(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
  }

  /**
   *
   * @param {number} val
   * @returns {void}
   */

  addAtTail(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = newNode

      // TIP: Add the following line to create a cycle
      // newNode.next = this.head
    }

    this.length++
  }

  /**
   *
   * @param {number} index
   * @param {number} val
   * @returns {void}
   */

  addAtIndex(index, val) {
    if (index > this.length) return

    if (index === 0) {
      this.addAtHead(val)
      return
    }

    if (index === this.length) {
      this.addAtTail(val)
      return
    }

    let newNode = new Node(val)
    let current = this.head

    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }

    newNode.next = current.next
    current.next = newNode

    this.length++
  }

  /**
   *
   * @param {number} index
   * @returns {void}
   */

  deleteAtIndex(index) {
    if (index >= this.length || !this.head) return

    if (index === 0) {
      this.head = this.head.next
      this.length--
      return
    }

    let current = this.head

    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }

    current.next = current.next.next

    this.length--
  }
}

// -------------------------
// TESTS

let obj = new MyLinkedList()
obj.addAtTail(2)
obj.addAtTail(3)
obj.addAtHead(1)

obj.addAtIndex(2, 10)

console.log(obj.head) // 1 -> 2 -> 10 -> 3
console.log(obj.length) // 4
console.log(obj.get(0)) // 1
console.log(obj.get(1)) // 2
