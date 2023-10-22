// * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels

// Letters are case sensitive, so "a" is considered a different type of stone from "A"

/**
 * @param {string} jewels
 * @param {string} stones
 * @returns {number}
 */

// O(n) time | O(n) space
function numJewelsInStones(jewels, stones) {
  let set = new Set()
  let count = 0

  for (let jewel of jewels) {
    set.add(jewel)
  }

  for (let stone of stones) {
    if (set.has(stone)) count++
  }

  return count
}

// -------------------------------
// SOLUTION 2

function numJewelsInStones2(jewels, stones) {
  let count = 0

  for (let stone of stones) {
    if (jewels.includes(stone)) count++
  }

  return count
}

// -------------------------------
// SOLUTION 3

function numJewelsInStones3(jewels, stones) {
  let set = new Set(jewels)
  let count = 0

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++
  }

  return count
}

// -------------------------------
// TESTS

console.log(numJewelsInStones3('aA', 'aAAbbb')) // 3
console.log(numJewelsInStones3('z', 'ZZ')) // 0
