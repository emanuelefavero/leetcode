// * To Lower Case

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(n) space
function toLowerCase(s) {
  return s.toLowerCase()
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses ASCII values to convert uppercase to lowercase. It is slower than the first solution

function toLowerCase2(s) {
  let result = ''

  for (let char of s) {
    let charCode = char.charCodeAt(0)
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32
    }

    result += String.fromCharCode(charCode)
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(toLowerCase('Hello')) // hello

// 2
console.log(toLowerCase2('Hello')) // hello
