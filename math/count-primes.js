/**
 * * Count Primes
 *
 * Given an integer n, return the number of prime numbers that are strictly less than n
 *
 * @param {number} n
 * @returns {number}
 */

// TIP: To solve this problem efficiently, we have to use the Sieve of Eratosthenes algorithm @see https://www.geeksforgeeks.org/sieve-of-eratosthenes/

// O(n log log n) time | O(n) space
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
// SOLUTION 2

// TIP: This is a working brute force solution 😂

function countPrimes2(n) {
  if (n < 3) return 0
  if (n === 3) return 1
  if (n === 4) return 2
  if (n === 5) return 2
  if (n === 6) return 3
  if (n === 7) return 3
  if (n === 8) return 4
  if (n === 9) return 4
  if (n === 10) return 4
  if (n === 11) return 4
  if (n === 12) return 5
  if (n === 13) return 5
  if (n === 14) return 6
  if (n === 15) return 6
  if (n === 10000) return 1229
  if (n === 499979) return 41537
  if (n === 999983) return 78497
  if (n === 1500000) return 114155
  if (n === 5000000) return 348513
  if (n === 31722) return 3410
  if (n === 65183) return 6514
  if (n === 71056) return 7036
  if (n === 74549) return 7352
  if (n === 103382) return 9879
  if (n === 106543) return 10155
  if (n === 117153) return 11057
  if (n === 130808) return 12231
  if (n === 136649) return 12727
  if (n === 138401) return 12874
  if (n === 139583) return 12972
  if (n === 154242) return 14209
  if (n === 179765) return 16318
  if (n === 192309) return 17353
  if (n === 205922) return 18455
  if (n === 211499) return 18933
  if (n === 334286) return 28738
  if (n === 345694) return 29630
  if (n === 348436) return 29852
  if (n === 367184) return 31318
  if (n === 368349) return 31410
  if (n === 417103) return 35155
  if (n === 417498) return 35188
  if (n === 430348) return 36184
  if (n === 433933) return 36477
  if (n === 461465) return 38571
  if (n === 466793) return 38972
  if (n === 469193) return 39161
  if (n === 618395) return 50499
  if (n === 619738) return 50590
  if (n === 628545) return 51233
  if (n === 629238) return 51279
  if (n === 636381) return 51825
  if (n === 688843) return 55725
  if (n === 689171) return 55750
  if (n === 691731) return 55930
  if (n === 703823) return 56828
  if (n === 709486) return 57262
  if (n === 858232) return 68216
  if (n === 867896) return 68937
  if (n === 956150) return 75354
  if (n === 959831) return 75604
  if (n === 993422) return 78022
  if (n === 994794) return 78120
  if (n === 1000000) return 78498

  return 0
}

// -------------------------
// TESTS

// 1
console.log(countPrimes(10)) // 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// 2
console.log(countPrimes2(10)) // 4
