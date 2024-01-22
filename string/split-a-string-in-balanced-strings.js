// * Split a String in Balanced Strings

/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.
*/

function balancedStringSplit(s) {
  let count = 0
  let l = 0
  let r = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') l++
    else r++

    if (l === r) count++
  }

  return count
}

// ---------------------------------------------------
// TESTS

console.log(balancedStringSplit('RLRRLLRLRL')) // 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
console.log(balancedStringSplit('RLRRRLLRLL')) // 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

console.log(balancedStringSplit('LLLLRRRR')) // 1
