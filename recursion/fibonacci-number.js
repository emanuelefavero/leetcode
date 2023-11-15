function fib(n) {
  if (n === 0 || n === 1) return n

  return fib(n - 2) + fib(n - 1)
}

console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(10)) // 5
