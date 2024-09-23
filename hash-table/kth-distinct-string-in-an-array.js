// * Kth Distinct String in an Array

/*
A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
*/

function kthDistinct(arr, k) {
  let map = new Map()

  for (let string of arr) {
    if (map.has(string)) map.set(string, 1)
    else map.set(string, 0)
  }

  let result = []
  for (let string of arr) {
    if (map.get(string) === 0) result.push(string)
  }

  if (result.length < k) return ''
  return result[k - 1]
}

// -----------------------------
// TESTS

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)) // 'a'
/*
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 
*/
