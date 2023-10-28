// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// TODO: add link to README
// TODO: add jsDoc

class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(x) {
    this.stack1.push(x)
  }

  // NOTE: This is the key to the solution, before calling pop or peek we need to migrate the elements from stack1 to stack2 so that the first element in stack2 is the first element in the queue
  _migrate() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
  }

  pop() {
    this._migrate()
    return this.stack2.pop()
  }

  peek() {
    this._migrate()
    return this.stack2[this.stack2.length - 1]
  }

  empty() {
    return !this.stack1.length && !this.stack2.length
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
