// * Maximum Substrings With Distinct Start

/*
You are given a string s consisting of lowercase English letters.

Return an integer denoting the maximum number of substrings you can split s into such that each substring starts with a distinct character (i.e., no two substrings start with the same character).
*/

function maxDistinct(s) {
  return new Set(s).size
}

// -----------------------------
// TESTS

console.log(maxDistinct('abab')) // 2
/*
Explanation:
- Split "abab" into "a" and "bab".
- Each substring starts with a distinct character i.e 'a' and 'b'. Thus, the answer is 2.
*/
console.log(maxDistinct('abcd')) // 4
console.log(maxDistinct('aaaa')) // 1
