// * Kth Distinct String in an Array

/*
A result string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth result string present in arr. If there are fewer than k result strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
*/

/**
 * @param {string[]} arr
 * @param {number} k
 * @returns {string}
 */

// TIP: Use a hash table to store the count of each string in the array.
// ? We only assign 1 to duplicate strings since we don't really care about the count, just if it is a duplicate or not

// O(n) time | O(n) space
function kthDistinct(arr, k) {
  const map = new Map()

  for (const string of arr) {
    if (map.has(string)) map.set(string, 1) // ?
    else map.set(string, 0)
  }

  const result = []
  for (const string of arr) {
    if (map.get(string) === 0) result.push(string)
  }

  if (result.length < k) return ''
  return result[k - 1]
}

// -----------------------------
// SOLUTION 2

// TIP: This solution stops the second loop as soon as it finds the kth distinct string

function kthDistinct2(arr, k) {
  const map = new Map()

  for (const string of arr) {
    if (map.has(string)) map.set(string, 1)
    else map.set(string, 0)
  }

  let count = 0
  for (const string of arr) {
    if (map.get(string) === 0) count++
    if (count === k) return string
  }

  return ''
}

// -----------------------------
// TESTS

// 1
console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)) // 'a'
/*
Explanation:
The only result strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st result string.
"a" appears 2nd, so it is the 2nd result string.
Since k == 2, "a" is returned. 
*/

// 2
console.log(kthDistinct2(['d', 'b', 'c', 'b', 'c', 'a'], 2)) // 'a'
