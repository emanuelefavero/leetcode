// * Decode XORed Array

/*
There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

Return the original array arr. It can be proved that the answer exists and is unique.
*/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @returns {number[]}
 */

// TIP: Since encoded[i] = result[i] XOR result[i+1], then result[i+1] = encoded[i] XOR result[i].
// Iterate encoded array, and set result[i+1] = encoded[i] XOR result[i]

// O(n) time | O(n) space
function decode(encoded, first) {
  let result = [first]

  for (let i = 0; i < encoded.length; i++) {
    result.push(encoded[i] ^ result[i])
  }

  return result
}

// -----------------------------
// TESTS

console.log(decode([1, 2, 3], 1)) // [1, 0, 2, 1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
