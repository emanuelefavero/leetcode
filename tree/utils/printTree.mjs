export function printTree(root, { mode = 'pretty' } = {}) {
  if (!root) {
    console.log('-')
    return
  }

  if (mode === 'preorder') {
    printPreorder(root)
  } else if (mode === 'pretty') {
    printPretty(root)
  } else {
    throw new Error(`Unknown mode: ${mode}`)
  }
}

function printPreorder(root) {
  const result = []

  ;(function dfs(node) {
    if (!node) {
      result.push('-')
      return
    }
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  })(root)

  console.log(result.join(' → '))
}

function printPretty(root) {
  const height = getHeight(root)
  const maxNodes = Math.pow(2, height)
  let queue = [root]

  for (let level = 0; level < height; level++) {
    const levelSize = Math.pow(2, level)
    const spaceBetween = Math.floor(maxNodes / levelSize)
    let line = ''

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()

      line += ' '.repeat(spaceBetween - 1)
      line += node ? node.val : '-'
      line += ' '.repeat(spaceBetween)

      if (node) {
        queue.push(node.left)
        queue.push(node.right)
      } else {
        queue.push(null, null)
      }
    }

    console.log(line.trimEnd())
  }
}

function getHeight(node) {
  if (!node) return 0
  return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}
