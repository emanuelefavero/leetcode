function print2dArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j])
    }
  }
}

let array2d = [
  [1, 2],
  [3, 4],
]

console.log(print2dArray(array2d))
