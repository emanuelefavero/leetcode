// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  _migrate(stack1, stack2) {
    while (stack1.length) {
      stack2.push(stack1.pop())
    }
  }

  push(x) {
    if (this.stack1.length) {
      this.stack2.push(x)
      this._migrate(this.stack1, this.stack2)
    } else {
      this._migrate(this.stack2, this.stack1) // pass stack2 as stack1 and vice versa
      this.stack1.push(x)
    }
  }

  pop() {
    if (this.stack1.length) return this.stack1.pop()
    else return this.stack2.pop()
  }

  peek() {
    if (this.stack1.length) return this.stack1[this.stack1.length - 1]
    else return this.stack2[this.stack2.length - 1]
  }

  empty() {
    // if any of the stacks has elements, the queue is not empty
    return !(this.stack1.length || this.stack2.length)
  }
}

// ------------------------
// TESTS

let queue = new MyQueue()

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)

console.log(queue.pop()) // 1
console.log(queue.peek()) // 2
console.log(queue.empty()) // false

console.log(queue)
