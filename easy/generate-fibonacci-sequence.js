// * Generate Fibonacci Sequence

/*
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

TIP: Javascript has the concept of generators. They are critical to this problem.
TIP: A generator function is a special type of function that can be paused and resumed. It is defined using the function* syntax. Inside the generator function, we can use the yield keyword to pause the function and return a value. When the generator is resumed, it continues from where it left off.
*/

// TIP: To solve this problem, we are going to create an infinite loop that calculates the next number in the fibonacci sequence and yields it. We will start with the first two numbers of the sequence, 0 and 1, and then calculate the next number by adding the previous two numbers

function* fibGenerator() {
  let a = 0
  let b = 1

  while (true) {
    yield a

    let temp = a
    a = b
    b = temp + b
  }
}

// -------------------------
// TESTS

const gen = fibGenerator()
console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next().value) // 3
