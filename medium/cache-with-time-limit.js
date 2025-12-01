// * Cache With Time Limit

// TIP: This is a JavaScript specific problem

/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

class TimeLimitedCache {
  constructor() {
    this.cache = new Map()
  }

  /**
   *
   * @param {number} key
   * @param {number} value
   * @param {number} duration
   * @returns {boolean} true if key existed, false otherwise
   */

  set(key, value, duration) {
    const cache = this.cache

    // Check if key already exists
    const found = cache.has(key)

    // If it exists, clear the previous timeout
    if (found) clearTimeout(cache.get(key).timer)

    // Set the new value with a timeout to delete it after duration
    const data = {
      value,
      timer: setTimeout(() => cache.delete(key), duration),
    }
    cache.set(key, data)

    return found
  }

  /**
   * @param {number} key
   * @returns {number} value or -1
   */

  get(key) {
    // Return the value if key exists, otherwise -1
    const cache = this.cache
    if (cache.has(key)) return cache.get(key).value
    return -1
  }

  /**
   * @returns {number} count of un-expired keys
   */

  count() {
    return this.cache.size
  }
}

// --------------------------
// SOLUTION 2

// TIP: This solution tracks expiration times with timestamps instead of relying solely on timeouts

class TimeLimitedCache2 {
  constructor() {
    this.cache = new Map()
  }

  set(key, value, duration) {
    const cache = this.cache

    const now = Date.now()
    const maxAge = now + duration

    // Check if key exists and is unexpired
    const found = cache.get(key)
    const unExpired = found && found.maxAge > now

    // Clear previous timeout if unexpired
    if (unExpired) clearTimeout(found.timer)

    // Set new value with expiration time and timeout
    const timer = setTimeout(() => cache.delete(key), duration)
    cache.set(key, { value, maxAge, timer })

    // Return true if unexpired key existed, false otherwise
    return !!unExpired // ? doble NOT operator to convert to boolean
  }

  get(key) {
    const cache = this.cache

    const data = cache.get(key)
    if (!data) return -1

    // Check if expired, if so delete and return -1
    if (data.maxAge < Date.now()) {
      cache.delete(data)
      return -1
    }

    return data.value
  }

  count() {
    const cache = this.cache

    const now = Date.now()
    let n = 0

    for (const [_, data] of cache) {
      if (data.maxAge > now) n++
    }

    return n
  }
}

// --------------------------
// TESTS

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)) // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1

const timeLimitedCache2 = new TimeLimitedCache2()
console.log(timeLimitedCache2.set(1, 42, 1000)) // false
console.log(timeLimitedCache2.get(1)) // 42
console.log(timeLimitedCache2.count()) // 1
