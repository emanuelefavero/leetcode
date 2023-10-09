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

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
