// * Find the Prefix Common Array of Two Arrays

/*
You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.
*/

function findThePrefixCommonArray(A, B) {
  let n = A.length
  let freq = new Array(n + 1).fill(0)
  let result = []
  let count = 0

  for (let i = 0; i < n; i++) {
    if (++freq[A[i]] === 2) count++
    if (++freq[B[i]] === 2) count++
    result.push(count)
  }

  return result
}

// -----------------------------
// TESTS

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])) // [0,2,3,4]
/*
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
*/
