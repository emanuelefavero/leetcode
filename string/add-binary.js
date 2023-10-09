// TODO: link to README
// TODO: solution 2
// TODO: jsDOc

function addBinary(a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)

  // ? BigInt() - converts a string to a number (it can also handle very large numbers)
  // ? '0b' - the 0b here tells the function that the string is a binary number
  // ? .toString(2) - the 2 here tells the function to convert the number to binary
}

console.log(addBinary('11', '1')) // 100
