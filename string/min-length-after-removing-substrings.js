// * Minimum String Length After Removing Substrings

/*
You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
*/

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(1) space
function minLength(s) {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replace('AB', '').replace('CD', '')
  }

  return s.length
}

// -------------------------
// SOLUTION 2

// TIP: We can also use a stack to solve this problem

// O(n) time | O(n) space
function minLength2(s) {
  const stack = []

  for (const char of s) {
    // Check if the last character in the stack is 'A' or 'C' and the current character is 'B' or 'D' respectively
    if (char === 'B' && stack[stack.length - 1] === 'A') stack.pop()
    else if (char === 'D' && stack[stack.length - 1] === 'C') stack.pop()
    else stack.push(char) // Otherwise, push the current character to the stack
  }

  return stack.length
}

// -------------------------
// TESTS

// 1
console.log(minLength('ABFCACDB')) // 2
/*
Explanation: We can do the following operations:
- Remove the substring "ABFCACDB", so s = "FCACDB".
- Remove the substring "FCACDB", so s = "FCAB".
- Remove the substring "FCAB", so s = "FC".
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain.
*/

// 2
console.log(minLength2('ABFCACDB')) // 2
