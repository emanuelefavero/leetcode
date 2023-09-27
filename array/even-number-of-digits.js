function findNumbers(nums) {
  let count = 0

  for (let num of nums) {
    if (String(num).length % 2 === 0) count++
  }

  return count
}

console.log(findNumbers([22, 1, 234, 33]))
