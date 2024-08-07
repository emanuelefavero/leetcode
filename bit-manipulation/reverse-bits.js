// * Reverse Bits

/*
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
*/

// TIP: This solution does not use bit manipulation

function reverseBits(n) {
  // TIP: add leading zeros if string length is less than 32
  const binary = n.toString(2).padStart(32, '0')
  const reversed = binary.split('').reverse().join('')
  return parseInt(reversed, 2) // convert binary to decimal
}

// ----------------------
// TESTS

console.log(reverseBits(43261596)) // 964176192
