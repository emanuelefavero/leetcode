class Stack {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push(val)
  }

  pop() {
    this.stack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }
}

// ------------------------
// TESTS

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

console.log(stack.top()) // 2

console.log(stack.stack) // [1, 2]
