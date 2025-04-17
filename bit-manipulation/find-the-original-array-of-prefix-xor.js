// * Find The Original Array of Prefix Xor

/*
You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

- pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].

Note that ^ denotes the bitwise-xor operation.

It can be proven that the answer is unique.
*/

/**
 * @param {number[]} pref
 * @returns {number[]}
 */

// O(n) time | O(n) space
function findArray(pref) {
  let result = [pref[0]]

  for (let i = 1; i < pref.length; i++) {
    result.push(pref[i] ^ pref[i - 1])
  }

  return result
}

// ----------------------
// SOLUTION 2

// O(n) time | O(1) space
function findArray2(pref) {
  let accumulator = pref[0]

  for (let i = 1; i < pref.length; i++) {
    const temp = pref[i]
    const or = accumulator ^ temp
    accumulator ^= or
    pref[i] = or
  }

  return pref
}

// ----------------------
// TESTS

// 1
console.log(findArray([5, 2, 0, 3, 1])) // [5, 7, 2, 3, 2]
/*
Explanation: From the array [5,7,2,3,2] we have the following:
- pref[0] = 5.
- pref[1] = 5 ^ 7 = 2.
- pref[2] = 5 ^ 7 ^ 2 = 0.
- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
*/

// 2
console.log(findArray2([5, 2, 0, 3, 1])) // [5, 7, 2, 3, 2]
