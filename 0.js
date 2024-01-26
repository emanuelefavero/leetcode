function arrayStringsAreEqual(word1, word2) {
  let string1 = ''
  let string2 = ''

  for (s of word1) {
    for (char of s) {
      string1 += char
    }
  }

  for (s of word2) {
    for (char of s) {
      string2 += char
    }
  }

  return string1 === string2
}

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']))
