function findDisappearedNumbers(nums) {
  let hashTable = {}

  for (let num of nums) {
    if (!hashTable[num]) hashTable[num] = true
  }

  let result = []
  for (let i = 1; i < nums.length; i++) {
    if (!hashTable[i]) result.push(i)
  }

  return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
