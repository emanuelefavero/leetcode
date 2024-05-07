// * Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s) {
  let trimmedString = s.trim()
  let arrayOfStrings = trimmedString.split(' ')
  let lastWord = arrayOfStrings.pop()
  return lastWord.length
}

// -------------------------
// TESTS

console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')) // 4
