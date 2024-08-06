// * Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

function hammingDistance(x, y) {
  // TIP: XOR operator (^) will return 1 if the bits are different and 0 if they are the same
  return (x ^ y).toString(2).replace(/0/g, '').length
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
