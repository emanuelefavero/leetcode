// * Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

function hammingDistance(x, y) {
  let xBinary = x.toString(2)
  let yBinary = y.toString(2)
  let counter = 0

  for (let i = 0; i < xBinary.length; i++) {
    let xChar = xBinary[i]
    let yChar = yBinary[i]

    if (xChar === undefined || yChar === undefined) break
    if (xChar !== yChar) counter++
  }

  let lengthDifference = Math.abs(xBinary.length - yBinary.length)
  counter += lengthDifference

  return counter
}

// ----------------------
// TESTS

console.log(hammingDistance(1, 4)) // 2
/*
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
*/
console.log(hammingDistance(3, 1)) // 1
