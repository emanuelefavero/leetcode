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
  for (let char of message) {
    if (char === ' ') result += ' ' // if the character is a space, add a space
    else result += hash.get(char)
  }

  return result
}

console.log(
  decodeMessage(
    'the quick brown fox jumps over the lazy dog',
    'vkbs bs t suepuv'
  )
)
