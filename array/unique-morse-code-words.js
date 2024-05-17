// * Unique Morse Code Words

/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.
*/

/**
 * @param {string[]} words
 * @returns {number}
 */

// O(n * m) time | O(n) space, where n is the number of words and m is the length of each word
function uniqueMorseRepresentations(words) {
  let map = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  }

  let set = new Set()

  for (let i = 0; i < words.length; i++) {
    let morseWord = ''

    for (let j = 0; j < words[i].length; j++) {
      morseWord += `${map[words[i][j]]}`
    }

    set.add(morseWord)
  }

  return set.size
}

// ----------------------
// TESTS

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])) // 2
