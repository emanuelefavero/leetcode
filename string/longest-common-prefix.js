// TODO: Add jsDoc and comments

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
  let prefix = ''

  // loop through the first string
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i] // get the character at the current index

    // loop through the rest of the strings
    for (let j = 1; j < strs.length; j++) {
      // if the character at the current index is not equal to the character at the current index of the current string, return the prefix
      if (strs[j][i] !== char) return prefix
    }

    // add the character to the prefix
    prefix += char
  }

  return prefix
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses sorting and the fact that the longest common prefix is the prefix of the first and last string in the array

function longestCommonPrefix2(strs) {
  let prefix = ''
  strs.sort() // sort the array

  // loop through the first string
  for (let i = 0; i < strs[0].length; i++) {
    // if the character at the current index of the first string is equal to the character at the current index of the last string, add it to the prefix
    if (strs[0][i] === strs[strs.length - 1][i]) prefix += strs[0][i]
    else return prefix // otherwise, return the prefix
  }

  return prefix
}

// -------------------------
// TESTS

// 1
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''

// 2
console.log(longestCommonPrefix2(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix2(['dog', 'racecar', 'car'])) // ''
