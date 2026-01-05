// * Encode and Decode TinyURL

/*
Note: This is a companion problem to the System Design problem: Design TinyURL.

TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the Solution class:

- Solution() Initializes the object of the system.
- String encode(String longUrl) Returns a tiny URL for the given longUrl.
- String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.
*/

const baseUrl = 'http://tinyurl.com/'
const map = new Map()
let count = 1

/**
 * Encodes a URL to a shortened URL.
 * @param {string} longUrl
 * @returns {string}
 */
function encode(longUrl) {
  const shortUrl = baseUrl + count
  map.set(shortUrl, longUrl)
  count++
  return shortUrl
}

/**
 * Decodes a shortened URL to its original URL.
 * @param {string} shortUrl
 * @returns {string}
 */
function decode(shortUrl) {
  return map.get(shortUrl)
}

// -----------------------------
// SOLUTION 2

// TIP: This solution is less efficient but it doesn't rely on a counter

const BASE_URL = 'http://tinyurl.com/'
const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const ID_LENGTH = 6
const urlMap = new Map()

function getRandomId() {
  let id = ''

  for (let i = 0; i < ID_LENGTH; i++) {
    const random = Math.floor(Math.random() * CHARS.length)
    id += CHARS[random]
  }

  return id
}

function encode2(longUrl) {
  const shortUrl = BASE_URL + getRandomId()
  urlMap.set(shortUrl, longUrl)

  return shortUrl
}

function decode2(shortUrl) {
  return urlMap.get(shortUrl)
}

// -----------------------------
// TESTS

const url = 'https://leetcode.com/problems/design-tinyurl'

// 1
let shortUrl = encode(url)
console.log(decode(shortUrl)) // https://leetcode.com/problems/design-tinyurl
console.log(shortUrl) // http://tinyurl.com/1

// 2
shortUrl = encode2(url)
console.log(decode2(shortUrl)) // https://leetcode.com/problems/design-tinyurl
console.log(shortUrl) // http://tinyurl.com/a9wY0y
