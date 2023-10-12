// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

function reverseWords(s) {
  let result = []
  let word = ''

  for (let i = s.length - 1; i >= 0; i--) {
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

console.log(reverseWords('the sky is blue')) // 'eht yks si eulb'
console.log(reverseWords('  hello world  ')) // '  olleh dlrow  '
console.log(reverseWords('a good   example')) // 'a doog   elpmaxe'
