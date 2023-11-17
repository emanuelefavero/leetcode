// * K-th Symbol in Grammar

// We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
// For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
// Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

function kthGrammar(n, k) {
  // base case - check if we are in the first row
  if (n === 1 && k === 1) return 0

  // call recursively the previous row (n - 1) and adjust the index to be in the middle of the row (Math.ceil(k / 2)). Store the result in prevRow
  let prevRow = kthGrammar(n - 1, Math.ceil(k / 2))

  // check if the current index is even or odd
  let isEven = k % 2 === 0

  // if the previous row is 0, return 1 if the index is even, otherwise return 0
  if (prevRow === 0) {
    return isEven ? 1 : 0

    // if the previous row is 1, return 0 if the index is even, otherwise return 1
  } else {
    return isEven ? 0 : 1
  }
}

// -----------------------------
// TESTS

console.log(kthGrammar(1, 1)) // 0, row 1: 0
console.log(kthGrammar(2, 1)) // 0, row 1: 0, row 2: 01
console.log(kthGrammar(2, 2)) // 1, row 1: 0, row 2: 01
