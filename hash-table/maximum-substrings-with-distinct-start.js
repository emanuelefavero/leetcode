// * Maximum Substrings With Distinct Start

/*
You are given a string s consisting of lowercase English letters.

Return an integer denoting the maximum number of substrings you can split s into such that each substring starts with a distinct character (i.e., no two substrings start with the same character).
*/

/**
 * @param {string} s
 * @returns {number}
 */

// TIP: One-liner using Set to get distinct characters

// O(n) time | O(n) space
function maxDistinct(s) {
  return new Set(s).size
}

// -----------------------------
// SOLUTION 2

// TIP: Using boolean array to track presence of each character

function maxDistinct2(s) {
  // Initialize a boolean array to track presence of each lowercase letter (a-z)
  const arr = new Uint8Array(26) // [0, 0, ..., 0] length 26

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) // Get ASCII code a=97, b=98, ...
    const index = charCode - 97 // Convert to 0-based index a=0, b=1, ...
    arr[index] = 1 // Assign 1 to the index to mark presence
  }

  // Count the number of distinct letters by summing the boolean values
  // ? Each 1 in the array represents a distinct starting character
  return arr.reduce((num, acc) => num + acc, 0)
}

// -----------------------------
// TESTS

// 1
console.log(maxDistinct('abab')) // 2
/*
Explanation:
- Split "abab" into "a" and "bab".
- Each substring starts with a distinct character i.e 'a' and 'b'. Thus, the answer is 2.
*/
console.log(maxDistinct('abcd')) // 4
console.log(maxDistinct('aaaa')) // 1

// 2
console.log(maxDistinct2('abab')) // 2
console.log(maxDistinct2('abcd')) // 4
console.log(maxDistinct2('aaaa')) // 1
