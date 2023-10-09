// TODO: jsDOc

function addBinary(a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)

  // ? BigInt() - converts a string to a number (it can also handle very large numbers)
  // ? '0b' - the 0b here tells the function that the string is a binary number
  // ? .toString(2) - the 2 here tells the function to convert the number to binary
}

// -------------------------
// SOLUTION 2

// TIP: use the carry variable to keep track of the carry over

function addBinary2(a, b) {
  let result = ''
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  // loop through both strings from right to left
  while (i >= 0 || j >= 0 || carry > 0) {
    // convert the strings to numbers
    let sum = carry

    // add the numbers if they exist
    if (i >= 0) sum += parseInt(a[i--]) // i-- returns the value of i before it was decremented
    if (j >= 0) sum += parseInt(b[j--])

    // add the result to the beginning of the string
    result = (sum % 2) + result

    // set the carry
    carry = Math.floor(sum / 2) // 1 if sum is 2 or 3, 0 otherwise
  }

  return result
}

// -------------------------
// TESTS

console.log(addBinary('11', '1')) // 100
console.log(addBinary2('11', '1')) // 100
