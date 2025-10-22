// * Finding 3-Digit Even Numbers

/*
You are given an integer array digits, where each element is a digit. The array may contain duplicates.

You need to find all the unique integers that follow the given requirements:

- The integer consists of the concatenation of three elements from digits in any arbitrary order.
- The integer does not have leading zeros.
- The integer is even.

For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

Return a sorted array of the unique integers.
*/

function findEvenNumbers(digits) {
  const seen = new Set()
  const result = []

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue

    for (let j = 0; j < digits.length; j++) {
      if (i === j) continue

      for (let k = 0; k < digits.length; k++) {
        if (digits[k] % 2 || k === i || k === j) continue

        const digit = digits[i] * 100 + digits[j] * 10 + digits[k]
        if (seen.has(digit)) continue

        seen.add(digit)
        result.push(digit)
      }
    }
  }

  return result.sort((a, b) => a - b)
}

// -----------------------------
// TESTS

console.log(findEvenNumbers([2, 1, 3, 0]))
// [102,120,130,132,210,230,302,310,312,320]
/* Explanation: 
All the possible integers that follow the requirements are in the output array. 
Notice that there are no odd integers or integers with leading zeros.
*/
