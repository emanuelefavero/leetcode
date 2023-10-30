/**
 * * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty)
 *
 * @typedef {Object} MyQueue
 */

class MyStack {
  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  push(x) {
    this.queue1.push(x)
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    let popped = this.queue1.shift()

    // swap queues
    ;[this.queue1, this.queue2] = [this.queue2, this.queue1]

    return popped
  }

  top() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    let top = this.queue1[0]
    this.queue2.push(this.queue1.shift())

    // swap queues
    ;[this.queue1, this.queue2] = [this.queue2, this.queue1]

    return top
  }

  empty() {
    return !this.queue1.length
  }
}

// ------------------------
// TESTS

let stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop()) // 4
console.log(stack.top()) // 3
console.log(stack.empty()) // false

console.log(stack)
// MyStack { queue1: [ 1, 2, 3 ], queue2: [] }
