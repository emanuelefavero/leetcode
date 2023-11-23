class MapSum {
  constructor() {
    this.map = {}
  }

  insert(key, val) {
    this.map[key] = val
  }

  sum(prefix) {
    let sum = 0

    for (let key in this.map) {
      if (key.startsWith(prefix)) {
        sum += this.map[key] // add value to sum
      }
    }

    return sum
  }
}

// -----------------------------
// TESTS

let mapSum = new MapSum()
mapSum.insert('apple', 3)
console.log(mapSum.sum('ap')) // 3
mapSum.insert('app', 2)
console.log(mapSum.sum('ap')) // 5
