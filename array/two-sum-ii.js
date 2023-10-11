function twoSum(numbers, target) {
  let hashTable = {}

  for (let i = 0; i < numbers.length; i++) {
    if (hashTable[target - numbers[i]] !== undefined) {
      return [hashTable[target - numbers[i]] + 1, i + 1]
    }

    hashTable[numbers[i]] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 2]
