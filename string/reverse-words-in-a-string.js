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

console.log(reverseWords('the sky is blue')) // 'blue is the sky'
console.log(reverseWords('  hello world  ')) // 'world hello'
console.log(reverseWords('a good   example')) // 'example good a'
