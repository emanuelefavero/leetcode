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

// ------------------------
// TEMPLATE 2

// TIP: This is a template for a breadth first search (BFS) on a binary tree

function BFS(array) {
  let queue = [array[0]]

  while (queue.length) {
    let queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift()

      console.log(current) // DO SOMETHING WITH CURRENT

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }
}

BFS([1, 2, 3, 4, 5]) // 1 2 3 4 5
