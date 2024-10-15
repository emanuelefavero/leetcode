// * Counter II

// TIP: This is a JavaScript specific problem

/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

function createCounter(init) {
  let number = init

  return {
    increment: () => ++number,
    decrement: () => --number,
    reset: () => (number = init),
  }
}

// -------------------------
// SOLUTION 2

function createCounter2(init) {
  let num = init

  return {
    increment: () => {
      init++
      return init
    },
    decrement: () => {
      init--
      return init
    },
    reset: () => {
      init = num
      return init
    },
  }
}

// -------------------------
// TESTS

// 1
const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.increment()) // 7
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4

console.log('SOLUTION 2')

// 2
const counter2 = createCounter(5)
console.log(counter2.increment()) // 6
console.log(counter2.increment()) // 7
console.log(counter2.reset()) // 5
console.log(counter2.decrement()) // 4
