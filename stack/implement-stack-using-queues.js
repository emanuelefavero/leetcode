/**
 * * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty)
 *
 * @typedef {Object} MyQueue
 */

// NOTE: Create a stack using two queues. The queues can't use the pop method, only shift and push

class MyStack {
  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  push(x) {
    this.queue1.push(x)
  }

  _migrate() {
    if (!this.queue2.length) {
      while (this.queue1.length) {
        this.queue2.push(this.queue1.shift())
      }
    }
  }

  pop() {
    this._migrate()
    return this.queue2.pop()
  }

  top() {
    this._migrate()
    return this.queue2[this.queue2.length - 1]
  }

  empty() {
    return !this.queue1.length && !this.queue2.length
  }
}

// ------------------------
// TESTS

let stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop()) // 1
console.log(stack.top()) // 2
console.log(stack.empty()) // false

console.log(stack)
