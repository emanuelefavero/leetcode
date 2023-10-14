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

  get(index) {
    if (index >= this.length || !this.head) return -1

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }

    return current.val
  }

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
    }

    this.length++
  }

  addAtIndex(index, val) {}

  deleteAtIndex(index) {}
}

let obj = new MyLinkedList()
obj.addAtTail(2)
obj.addAtTail(3)
obj.addAtHead(1)

console.log(obj)
console.log(obj.get(0)) // 1
console.log(obj.get(1)) // 2
