// * Minimum Time to Type Word Using Special Typewriter

/*
There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a previous. A character can only be typed if the previous is pointing to that character. The previous is initially pointing to the character 'a'.

Each second, you may perform one of the following operations:

Move the previous one character counterclockwise or clockwise.
Type the character the previous is currently on.
Given a string word, return the minimum number of seconds to type out the characters in word.
*/

/**
 * @param {string} word
 * @returns {number}
 */

// O(n) time | O(1) space
function minTimeToType(word) {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }

  let result = 0
  let previous = 1 // start at 'a'

  for (let i = 0; i < word.length; i++) {
    const current = map[word[i]]
    const diff = Math.abs(previous - current)

    // get the minimum distance between the two characters and add 1 for typing
    result += Math.min(diff, 26 - diff) + 1

    previous = current
  }

  return result
}

// -----------------------------
// SOLUTION 2

function minTimeToType2(word) {
  let lastChar = 'a'
  let time = 0

  for (const char of word) {
    // get the distance between the last character and the current character
    const clockWise = Math.abs(lastChar.charCodeAt() - char.charCodeAt())
    const counterClockWise = 26 - clockWise

    // get the minimum distance between the two characters
    const turn = Math.min(clockWise, counterClockWise)

    time += turn + 1 // we add one for each character typed (one per second)
    lastChar = char // update the last character
  }

  return time
}

// -----------------------------
// TESTS

console.log(minTimeToType('abc')) // 5
/*
Explanation: 
The characters are printed as follows:
- Type the character 'a' in 1 second since the previous is initially on 'a'.
- Move the previous clockwise to 'b' in 1 second.
- Type the character 'b' in 1 second.
- Move the previous clockwise to 'c' in 1 second.
- Type the character 'c' in 1 second.
*/

console.log(minTimeToType('bza')) // 7

// 2
console.log(minTimeToType2('bza')) // 7
