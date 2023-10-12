function reverseWords(s) {
  let result = []
  let word = ''

  for (let i = 0; i < s.length; i++) {
    let char = s[i]

    if (char !== ' ') {
      word += char
    } else if (word) {
      result.push(word)
      word = ''
    }
  }

  result.push(word)

  return result.reverse().join(' ').trim()
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses JavaScript built in methods

function reverseWords2(s) {
  return s
    .split(' ') // split string into array of words
    .filter((word) => word) // remove empty strings
    .reverse()
    .join(' ')
    .trim()
}

// -------------------------
// SOLUTION 3

function reverseWords3(s) {
  let trimmed = s.trim().split(' ') // trim and split string into array of words
  let result = []

  // loop through the array backwards
  for (let i = trimmed.length - 1; i >= 0; i--) {
    // add the word to the result if it is not empty
    if (trimmed[i]) result.push(trimmed[i])
  }

  return result.join(' ')
}

// -------------------------
// TESTS

console.log(reverseWords('the sky is blue')) // 'blue is the sky'
console.log(reverseWords2('  hello world  ')) // 'world hello'
console.log(reverseWords3('a good   example')) // 'example good a'
