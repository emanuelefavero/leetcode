// * queue technique template

function print(array) {
  let i = 0
  let queue = [array[i]]

  while (queue.length) {
    let current = queue.shift()

    console.log(current)

    i++
    if (array[i]) queue.push(array[i])
  }
}

print([1, 2, 3, 4, 5]) // 1 2 3 4 5
