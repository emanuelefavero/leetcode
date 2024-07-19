// * Count Primes

// Given an integer n, return the number of prime numbers that are strictly less than n

// TIP: To solve this problem efficiently, we have to use the Sieve of Eratosthenes algorithm @see https://www.geeksforgeeks.org/sieve-of-eratosthenes/

function countPrimes(n) {
  let count = 0
  let seen = new Array(n).fill(false)

  for (let i = 2; i < n; i++) {
    if (seen[i]) continue

    count++
    for (let multiple = i * i; multiple < n; multiple += i) {
      seen[multiple] = true
    }
  }

  return count
}

// -------------------------
// TESTS

console.log(countPrimes(10)) // 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
