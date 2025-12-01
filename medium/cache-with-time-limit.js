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

  set(key, value, duration) {
    let cache = this.cache

    // Check if key already exists
    let found = cache.has(key)

    // If it exists, clear the previous timeout
    if (found) clearTimeout(cache.get(key).ref)

    // Set the new value with a timeout to delete it after duration
    const data = {
      value,
      ref: setTimeout(() => cache.delete(key), duration),
    }
    cache.set(key, data)

    return found // Return true if key existed, false otherwise
  }

  get(key) {
    // Return the value if key exists, otherwise -1
    let cache = this.cache
    if (cache.has(key)) return cache.get(key).value
    return -1
  }

  count() {
    return this.cache.size // Return the count of un-expired keys
  }
}

// --------------------------
// TESTS

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)) // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
