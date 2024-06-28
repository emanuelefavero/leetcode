// * Permutation Difference between Two Strings

/*
You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

Return the permutation difference between s and t.
*/

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {number}
 */

// O(n) time | O(1) space
function findPermutationDifference(s, t) {
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i)
    }
  }

  let result = 0

  for (let i = 0; i < t.length; i++) {
    result += Math.abs(map.get(t[i]) - i)
  }

  return result
}

// -------------------------
// TESTS

console.log(findPermutationDifference('abc', 'bac')) // 2
/*
Explanation:
For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:

The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.
*/
