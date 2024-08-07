// * Reverse Bits

/*
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
*/

/**
 * @param {number} n
 * @returns {number}
 */

// TIP: This solution does not use bit manipulation

// O(1) time | O(1) space
function reverseBits(n) {
  // TIP: add leading zeros if string length is less than 32
  const binary = n.toString(2).padStart(32, '0')
  const reversed = binary.split('').reverse().join('')
  return parseInt(reversed, 2) // convert binary to decimal
}

// ----------------------
// SOLUTION 2

// TIP: << left shift, >> right shift, | OR, & AND, (n & 1) gets 1 or 0 depending on the last bit

function reverseBits2(n) {
  let result = 0

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1)
    n >>>= 1
  }

  return result >>> 0
}

// ----------------------
// TESTS

// 1
console.log(reverseBits(43261596)) // 964176192
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// 2
console.log(reverseBits(43261596)) // 964176192
