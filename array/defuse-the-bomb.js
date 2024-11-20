// * Defuse the Bomb

// TIP: This is a sliding window problem

/*
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

- If k > 0, replace the ith number with the sum of the next k numbers.
- If k < 0, replace the ith number with the sum of the previous k numbers.
- If k == 0, replace the ith number with 0.

As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
*/

// TIP: This solution is not a sliding window solution
// TIP: Use modulo to handle circular array

function decrypt(code, k) {
  let length = code.length
  if (k === 0) return new Array(length).fill(0)

  let result = []

  if (k > 0) {
    for (let i = 0; i < length; i++) {
      let sum = 0
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % length]
      }
      result.push(sum)
    }
  } else {
    for (let i = 0; i < length; i++) {
      let sum = 0
      for (let j = 1; j <= Math.abs(k); j++) {
        sum += code[(i - j + length) % length]
      }
      result.push(sum)
    }
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This is a sliding window solution

function decrypt2(code, k) {
  const decode = (code, k) => {
    let length = 0
    let result = []
    let sum = 0

    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
      sum += code[i]
    }

    // Calculate the sum of the next k elements
    for (let i = 0; i < code.length; i++) {
      sum -= code[i]
      sum += code[(i + k) % code.length] // Use modulo to handle circular array
      result.push(sum)
    }

    return result
  }

  if (k === 0) return new Array(code.length).fill(0)
  if (k > 0) return decode(code, k)

  // Reverse the array to handle negative k
  if (k < 0) return decode(code.reverse(), -k).reverse()
}

// -------------------------
// TESTS

// 1
console.log(decrypt([5, 7, 1, 4], 3)) // [12, 10, 16, 13]
console.log(decrypt([1, 2, 3, 4], 0)) // [0, 0, 0, 0]
console.log(decrypt([2, 4, 9, 3], -2)) // [12, 5, 6, 13]

// 2
console.log(decrypt2([5, 7, 1, 4], 3)) // [12, 10, 16, 13]
console.log(decrypt2([1, 2, 3, 4], 0)) // [0, 0, 0, 0]
console.log(decrypt2([2, 4, 9, 3], -2)) // [12, 5, 6, 13]
