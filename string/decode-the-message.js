// * Decode the Message

/*
You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

1. Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
2. Align the substitution table with the regular English alphabet.
3. Each letter in message is then substituted using the table.
4. Spaces ' ' are transformed to themselves.

- For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.
*/

function decodeMessage(key, message) {
  key = [...new Set(key.replace(/ /g, ''))] // remove duplicates, spaces
  let result = ''
  let map = new Map()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < alphabet.length; i++) {
    map.set(key[i], alphabet[i])
  }

  for (let char of message) {
    result += map.get(char) || ' '
  }

  return result
}

// -------------------------
// TESTS

console.log(
  decodeMessage(
    'the quick brown fox jumps over the lazy dog',
    'vkbs bs t suepuv'
  )
) // 'this is a secret'
// Explanation: The diagram above shows the substitution table. It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".
