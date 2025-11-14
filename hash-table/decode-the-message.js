// * Decode the Message

/*
You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.
*/

/**
 * @param {string} key - The key used for decoding the message
 * @param {string} message - The message to be decoded
 * @returns {string} - The decoded message
 */

// O(n) time | O(1) space
function decodeMessage(key, message) {
  let result = ''

  // create an array of unique characters from the key, remove spaces
  key = Array.from(new Set(key.split(' ').join('')))

  const hash = new Map()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  // create an hash table with the key as the key and the alphabet as the value
  for (let i = 0; i < alphabet.length; i++) {
    hash.set(key[i], alphabet[i])
  }

  // loop through the message and replace the characters with the hash table
  for (const char of message) {
    if (char === ' ') result += ' ' // if the character is a space, add a space
    else result += hash.get(char)
  }

  return result
}

// ------------------------------------------
// TESTS

console.log(
  decodeMessage(
    'the quick brown fox jumps over the lazy dog',
    'vkbs bs t suepuv'
  )
)
