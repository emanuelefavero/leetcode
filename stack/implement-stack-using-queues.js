/**
 * * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty)
 *
 * @typedef {Object} MyQueue
 */

class MyStack {
  constructor() {
    this.queue = []
    this.queue = []
  }

  push(x) {}

  _migrate() {}

  pop() {}

  peek() {}

  empty() {}
}

// ------------------------
// TESTS

let stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop()) // 1
console.log(stack.peek()) // 2
console.log(stack.empty()) // false

console.log(stack)
