function reverseWords(s) {
  let result = []
  let word = ''

  for (let char of s) {
    if (char === ' ') {
      result.push(word)
      word = ''
    } else {
      word += char
    }
  }

  result.push(word)

  return result.reverse().join(' ').trim()
}

console.log(reverseWords('the sky is blue')) // 'blue is the sky'
console.log(reverseWords('  hello world  ')) // 'world hello'
