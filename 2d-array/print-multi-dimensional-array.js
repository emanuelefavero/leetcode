// TODO: Add jsDoc and comments
// TODO: Add link to README

function printMultiDimensionalArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      printMultiDimensionalArray(array[i])
    } else {
      console.log(array[i])
    }
  }
}

let multiDimensionalArray = [
  [1, 2],
  [3, 4, [5, 6]],
]

console.log(printMultiDimensionalArray(multiDimensionalArray))
