// Delete an element from an array (given the index) - no built in methods

function deleteElement(array, index) {
  for (let i = index + 1; i < array.length; i++) {
    array[i - 1] = array[i]
  }
  array.length = array.length - 1 // remove last element
}

// -----------------------------
// TESTS

let array = [1, 2, 3, 4, 5]
deleteElement(array, 2)

console.log(array) // [1, 2, 4, 5]
