// * Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

function hammingDistance(x, y) {
  // TIP: XOR operator (^) will return 1 if the bits are different and 0 if they are the same
  return (x ^ y).toString(2).replace(/0/g, '').length
}

// ----------------------
// SOLUTION 2

function hammingDistance2(x, y) {
  x = x.toString(2)
  y = y.toString(2)

  // Add leading zeros to make the strings the same length
  if (x.length < y.length) {
    while (x.length !== y.length) x = '0' + x
  } else {
    while (x.length !== y.length) y = '0' + y
  }

  let distance = 0

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) distance++
  }

  return distance
}

// ----------------------
// TESTS

// 1
console.log(hammingDistance(1, 4)) // 2
/*
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
*/
console.log(hammingDistance(3, 1)) // 1

// 2
console.log(hammingDistance2(1, 4)) // 2
console.log(hammingDistance2(3, 1)) // 1
