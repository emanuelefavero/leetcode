export function printTree(root, mode = 'tree') {
  if (!root) {
    console.log('-')
    return
  }

  if (mode === 'preorder') {
    printPreorder(root)
  } else if (mode === 'pretty') {
    printPretty(root)
  } else if (mode === 'tree') {
    printTreeMode(root)
  } else {
    throw new Error(`Unknown mode: ${mode}`)
  }
}

function printPreorder(root) {
  const result = []

  ;(function dfs(node) {
    if (!node) {
      return
    }
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  })(root)

  console.log(result.join(' → '))
}

function getMaxWidth(node) {
  if (!node) return 1
  return Math.max(
    String(node.val).length,
    getMaxWidth(node.left),
    getMaxWidth(node.right)
  )
}

function printPretty(root) {
  const height = getHeight(root)
  const maxWidth = getMaxWidth(root)
  const maxNodes = Math.pow(2, height)
  let queue = [root]

  for (let level = 0; level < height; level++) {
    const levelSize = Math.pow(2, level)
    const spaceBetween = Math.floor(maxNodes / levelSize)
    let line = ''

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()

      const valStr = node
        ? String(node.val).padStart(maxWidth)
        : '-'.repeat(maxWidth)
      line += ' '.repeat(spaceBetween - 1)
      line += valStr
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

function printTreeMode(root) {
  if (!root) return
  console.log(root.val)
  const children = []
  if (root.left) children.push(root.left)
  if (root.right) children.push(root.right)
  children.forEach((child, index) => {
    const isLast = index === children.length - 1
    printSubtree(child, '', isLast)
  })
}

function printSubtree(node, prefix, isLast) {
  if (!node) return
  const hasChildren = node.left || node.right
  let connector
  if (hasChildren) {
    connector = isLast ? '└─┬ ' : '├─┬ '
  } else {
    connector = isLast ? '└── ' : '├── '
  }
  console.log(prefix + connector + node.val)
  const children = []
  if (node.left) children.push(node.left)
  if (node.right) children.push(node.right)
  children.forEach((child, index) => {
    const isLastChild = index === children.length - 1
    const newPrefix = prefix + (isLast ? '    ' : '│   ')
    printSubtree(child, newPrefix, isLastChild)
  })
}

function getHeight(node) {
  if (!node) return 0
  return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}
