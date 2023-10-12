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
// TESTS

console.log(reverseWords('the sky is blue')) // 'blue is the sky'
console.log(reverseWords('  hello world  ')) // 'world hello'
console.log(reverseWords('a good   example')) // 'example good a'

console.log(reverseWords2('the sky is blue')) // 'blue is the sky'
console.log(reverseWords2('  hello world  ')) // 'world hello'
console.log(reverseWords2('a good   example')) // 'example good a'
