// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels

// Letters are case sensitive, so "a" is considered a different type of stone from "A"

function numJewelsInStones(jewels, stones) {
  let set = new Set(...jewels)
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
// TESTS

console.log(numJewelsInStones('aA', 'aAAbbb')) // 3
console.log(numJewelsInStones('z', 'ZZ')) // 0
