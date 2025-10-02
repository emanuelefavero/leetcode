// * Maximum Number of Words You Can Type

/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
*/

function canBeTypedWords(text, brokenLetters) {
  let set = new Set([...brokenLetters])
  let words = text.split(' ')
  let count = 0

  for (let word of words) {
    let hasBrokenLetter = false

    for (let char of word) {
      if (set.has(char)) {
        hasBrokenLetter = true
        break
      }
    }

    if (!hasBrokenLetter) count++
  }

  return count
}

// -----------------------------
// TESTS

console.log(canBeTypedWords('hello world', 'ad')) // 1
console.log(canBeTypedWords('leet code', 'lt')) // 1
console.log(canBeTypedWords('leet code', 'e')) // 0
