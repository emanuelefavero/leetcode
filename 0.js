let map = new Map()
let nums = [1, 2, 3, 2, 4]

for (let num of nums) {
  map.set(num, (map.get(num) || 0) + 1)
}

console.log(map) // Map(4) { 1 => 1, 2 => 2, 3 => 1, 4 => 1 }
