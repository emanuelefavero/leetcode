// * Find the Prefix Common Array of Two Arrays

/*
You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number[]}
 */

// TIP: Use a frequency array to count the occurrences of each number in A and B.

// O(n) time | O(n) space
function findThePrefixCommonArray(A, B) {
  let n = A.length
  let freq = new Array(n + 1).fill(0)
  let result = []
  let count = 0

  for (let i = 0; i < n; i++) {
    let numA = A[i]
    let numB = B[i]

    // Increment the frequency of the current numbers in A and B
    // If the frequency becomes 2 (the number is present in both arrays), increment the count
    freq[numA]++
    if (freq[A[i]] === 2) count++

    freq[numB]++
    if (freq[B[i]] === 2) count++

    result.push(count)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: This solution is similar to the first one but uses the pre increment operator to increment the frequency of the current numbers in A and B

function findThePrefixCommonArray2(A, B) {
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

// 1
console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])) // [0,2,3,4]
/*
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
*/

// 2
console.log(findThePrefixCommonArray2([1, 3, 2, 4], [3, 1, 2, 4])) // [0,2,3,4]
