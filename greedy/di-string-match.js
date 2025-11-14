// * DI String Match

/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

  s[i] == 'I' if perm[i] < perm[i + 1], and
  s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
*/

// TIP: We can use two pointers to keep track of the left and right values and push them into the result array based on the current character in the string. AT the end, we push the remaining value of left into the result array

/**
 * @param {string} s
 * @returns {number[]}
 */

// O(n) time | O(n) space
function diStringMatch(s) {
  const result = []
  let left = 0
  let right = s.length

  for (const char of s) {
    if (char === 'I') {
      result.push(left)
      left++
    } else if (char === 'D') {
      result.push(right)
      right--
    }
  }

  result.push(left) // TIP: left and right are the same at this point

  return result
}

// -----------------------------
// TESTS

console.log(diStringMatch('IDID')) // [0, 4, 1, 3, 2]
console.log(diStringMatch('III')) // [0, 1, 2, 3]
console.log(diStringMatch('DDI')) // [3, 2, 0, 1]
